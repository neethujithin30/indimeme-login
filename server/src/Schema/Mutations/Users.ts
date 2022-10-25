import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserInputError } from "apollo-server";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { SECRET_KEY } from "./config";
import { validateRegisterInput,validateLoginInput} from "../../util/validators";

export const CREATE_USER = {
  type: MessageType,
  args: {
    id:{type:GraphQLID},
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    confirmPassword: { type: GraphQLString },
    token:{ type: GraphQLString },
   createdAt:{ type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    let {id,username, email, password, confirmPassword ,createdAt,token} = args;
    const { valid, errors } = validateRegisterInput(
      username,
      email,
      password,
      confirmPassword
    );
    if (!valid) {
      throw new UserInputError("Errors", { errors });
    }
    const user = await Users.findOneBy({ username });
    if (user) {
      throw new UserInputError("username is taken", {
        errors: {
          username: "This username is taken",
        },
      });
    }
    password = await bcrypt.hash(password, 12);
    createdAt =new Date().toISOString();
    token=jwt.sign({
      id,
     },SECRET_KEY,{expiresIn:'1h'});
   await Users.insert({ username, email, password, confirmPassword,createdAt,token });
   return args
    
  },
};
export const LOGIN_USER = {
  type: MessageType,
  args: {
    id:{type:GraphQLID},
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {id, username, password } = args;
    const { valid, errors } = validateLoginInput(
      username,
      password,
    );
    if (!valid) {
      throw new UserInputError("Errors", { errors });
    }
    const user = await Users.findOneBy({ username: username });
        if (!user) {
          errors.general = "User not found";
          throw new UserInputError("User not found", { errors });
        }
     
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      errors.general = "Wrong credentials";
      throw new UserInputError("Wrong credentials", { errors });
    }
    const token=jwt.sign({
      id,
     },SECRET_KEY,{expiresIn:'1h'});
      
    return {
      username,
      args,
      errors,
      valid: Object.keys(errors).length < 1,
    }; 

    }
  }

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOneBy({ username: username });
    if (!user) {
      throw new Error("username doesn't exist");
    }
    const userPassword = user?.password;
    if (oldPassword === userPassword) {
      await Users.update({ username: username }, { password: newPassword });
      return { successful: true, message: "password updated" };
    } else {
      throw new Error("password do not match ");
    }
  },
};

export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Users.delete(id);
  },
};

