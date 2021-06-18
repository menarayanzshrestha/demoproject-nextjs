import React, { useState } from "react";

import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

import {Form, Input,Button, notification} from "antd";


 const Login = ({ props }) => {
  firebaseClient();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const openNotification = (placement, title,message) => {
    notification.info({
        message: `${title}`,
        description:
        `${message}`,
        placement,
        duration: 4,
    });
};
  return (

    <>
        <h1>LOGIN PAGE</h1>
        <Form>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="emailAddress"
            value={email}
            aria-describedby="email-helper-text"
            placeholder="Email"
          /><br/>
          <Input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="pass"
            value={pass}
            aria-describedby="password-helper-text"
          /><br/>
          <Button
            type="primary"
            disabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                  const message = error.message;
                  const title = "An error occured";

                  openNotification('topLeft',title,message)
                
                });
            }}
          >
            Create account
          </Button>
          <Button
            
            disabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                
                  const message = error.message;
                  const title = "An error occured";

                  openNotification('topLeft',title,message)
                 
                });
            }}
          >
            Log in
          </Button>
    </Form>
</>

  );
}

export default Login