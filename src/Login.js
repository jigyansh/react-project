import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
// import "./firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://media.istockphoto.com/photos/facebook-picture-id459388237"
          alt="fb logo"
          className="img1"
        />
        <img
          src="https://media.istockphoto.com/photos/facebook-website-picture-id458697755"
          alt="fb logo"
          className="img2"
        />
      </div>
      <div className="login_button">
        <Button type="submit" onClick={signIn} className="button">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
