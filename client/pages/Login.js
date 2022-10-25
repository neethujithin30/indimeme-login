import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {LOGIN_USER} from "./Graphql/Mutation";
import { useContext } from "react";
import {AuthContext} from './context/auth1';
function Login() {
const context =useContext(AuthContext);
const router = useRouter();
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [errors, setErrors] = useState({});
const [loginUser,{error}] = useMutation(LOGIN_USER
  ,{
  update(_,{data:{loginUser:userData}}){
    //  console.log(result); 
     context.login(userData);
     router.push("/UserHomepage");
 },
 onError(err) {
  console.log(err.graphQLErrors[0].extensions.errors);
  setErrors(err.graphQLErrors[0].extensions.errors);
},
}
);
  return (
    <div>
      <div id="container">
        <h1 className="head">Login</h1>
        <p className="head1">Please enter your details</p>
        <div >
            <ul className="list">
              <li></li>
            </ul>
          </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your user name"
              name="username"
              onChange={(event) =>{setUsername(event.target.value)}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) =>{setPassword(event.target.value)}}
            />
          </Form.Group>
          <Button variant="danger"
          onClick={() =>{
            loginUser({
            variables:{username:username,password:password},
          });   
            }}>
            Login
          </Button>
          {Object.keys(errors).length > 0 && (
            <div className="">
              <ul className="list">
                {Object.values(errors).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </Form>
        <p class="mb-0 mt-5">Don't have an account? <a href="/Register" class="text-primary-50 fw-bold">Sign Up</a>
                    </p>
      </div>
    </div>
  );
  
}
export default Login;

