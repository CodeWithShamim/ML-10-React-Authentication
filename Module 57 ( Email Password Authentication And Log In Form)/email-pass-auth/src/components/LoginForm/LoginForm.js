import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // validation
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (e) => {
    // validation start
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      // return;
    }
    setValidated(true);
    // validation start

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result);
          verifyEmail();
          updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
              console.log("profile updated!");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
      // sendEmailVerification
    }

    // setEmail([]);
    // setPassword([]);

    e.preventDefault();
  };

  const handleRegistered = (e) => {
    setRegistered(e.target.checked);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent!");
    });
  };

  // handlePasswordReset
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => console.log("Password reset send!"))
      .catch((error) => console.log(error));
  };

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please {registered ? "Login" : "Registered"}</h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {!registered && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              onBlur={handleNameBlur}
              type="text"
              placeholder="Enter name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={handleRegistered}
            type="checkbox"
            label="Already registered?"
          />
        </Form.Group>
        <Button onClick={handlePasswordReset} variant="link">
          Forgoted pasword?
        </Button>
        <br />
        <br />
        <Button variant="primary" type="submit">
          {registered ? "Login" : "Register"}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
