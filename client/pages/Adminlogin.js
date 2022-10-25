import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {ADMIN_LOGIN} from "./Graphql/Mutation";

function Adminlogin() {
const router = useRouter();
const [errors, setErrors] = useState({});
const [admin_username,setAdminUsername]=useState("");
const [admin_password,setAdminPassword]=useState("");
const [loginAdmin,{error}] = useMutation(ADMIN_LOGIN
    ,{
        update(_,result){
           console.log(result); 
           router.push("/AdminHome");
       },
       onError(err) {
        console.log(err.graphQLErrors[0].extensions.errors);
        setErrors(err.graphQLErrors[0].extensions.errors);
      },
      });
  return (
    <div>
      <div id="container">
        <h1 className="head">Admin Login</h1>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" 
             onChange={(event) =>{setAdminUsername(event.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
             onChange={(event) =>{setAdminPassword(event.target.value)}}/>
          </Form.Group>
          <Button variant="danger" 
           onClick={() =>{
            loginAdmin({
            variables:{admin_username:admin_username,admin_password:admin_password},
          }); }}>
            Submit
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
      </div>
    </div>
  );
}
export default Adminlogin;
