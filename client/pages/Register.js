import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Graphql/Mutation";
import { useContext } from "react";
import {AuthContext} from './context/auth1';

const Register = () => {
  const context =useContext(AuthContext);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [createUser, { error }] = useMutation(CREATE_USER, {
    update(_,{data:{createUser:userData}}) {
      // console.log(result);
      context.login(userData);
      router.push("/UserHomepage");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
  });
  return (
    <div>
      <div id="container">
        <h1 className="head">Signup</h1>
        <p className="head1">Please enter your details</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your user name"
              name="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="ConfirmPassword"
              name="confirmPassword"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="danger"
            onClick={() => {
              createUser({
                variables: {
                  username: username,
                  email: email,
                  password: password,
                  confirmPassword: confirmPassword,
                },
              });
            }}
          >
            Signup
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
        <p class="mb-0 mt-5">Already have an account? <a href="/Login" class="text-primary-50 fw-bold">Login</a>
                    </p>
       
      </div>
    </div>
  );
};
export default Register;
