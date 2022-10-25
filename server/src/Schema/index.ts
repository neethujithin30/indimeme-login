import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS} from './Queries/Users';
import{CREATE_USER,LOGIN_USER} from './Mutations/Users';
// import{ADMIN_LOGIN, CREATE_ADMIN} from './Mutations/Admin';

const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        getAllUsers: GET_ALL_USERS,
        // getAdmin:GET_ADMIN
    }
});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        createUser:CREATE_USER,
        // updatePassword:UPDATE_PASSWORD,
        loginUser:LOGIN_USER,
        // deleteUser:DELETE_USER,
        // createAdmin:CREATE_ADMIN,
        // loginAdmin:ADMIN_LOGIN
    }
    
});

export const schema = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
});