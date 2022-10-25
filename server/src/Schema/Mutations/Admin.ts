import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLID, GraphQLString } from "graphql";
import { UserInputError } from "apollo-server";
import { Admin } from "../../Entities/Admin";

export const CREATE_ADMIN = {
  type: MessageType,
  args: {
    admin_username: { type: GraphQLString },
    admin_password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { admin_username, admin_password } = args;
    await Admin.insert({admin_username,admin_password})
    return args;
   },
 };
 export const ADMIN_LOGIN = {
  type: MessageType,
  args: {
    admin_username: { type: GraphQLString },
    admin_password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { admin_username, admin_password } = args;
    const errors = {};
    const admin = await Admin.findOneBy({ admin_username: admin_username });
    if (admin_username.trim() === "") {
      throw new UserInputError("Username must not be empty", {
        errors: {
          admin_username: "Username must not be empty",
        },
      });
    }
    if (!admin) {
      throw new UserInputError("Username not found", {
        errors: {
          admin_username: "Username not found",
        },
      });
    }
    const adminPassword = admin?.admin_password;
    if (admin_password === "") {
      throw new UserInputError("Password must not empty", {
        errors: {
          admin_username: "Password must not empty",
        },
      });
    } 
    if (admin_password !== adminPassword) {
      throw new UserInputError("Password incorrect", {
        errors: {
          admin_username: "Password incorrect",
        },
      });
     
    }
    return {
      errors,
      valid: Object.keys(errors).length < 1,
    };
  },

};