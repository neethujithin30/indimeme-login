import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ){
      message
      successful 
    }
  }
`;

export const LOGIN_USER= gql`
mutation loginUser(
  $username: String!
  $password: String!
) {
  loginUser(
    username: $username
    password: $password
  ){
  message
  successful  
  username
  }
}
`;

export const ADMIN_LOGIN= gql`
mutation loginAdmin(
  $admin_username: String!
  $admin_password: String!
) {
  loginAdmin(
    admin_username: $admin_username
    admin_password: $admin_password
  ){
    message
    successful  
  }
}
`;
