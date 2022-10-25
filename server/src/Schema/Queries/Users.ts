import { UserType } from "../TypeDefs/User";
import { GraphQLList } from "graphql";
import {Users} from '../../Entities/Users';
import {Admin} from '../../Entities/Admin';

export const GET_ALL_USERS= {
    type: new GraphQLList(UserType),
    resolve(){
        return Users.find()
    },
};

// export const GET_ADMIN= {
//     type: new GraphQLList(UserType),
//     resolve(){
//         return Admin.find()
//     },
// };