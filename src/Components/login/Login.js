import React from "react";
import "./Login.css";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1>Login</h1>
      {user && <h1>{user.email}</h1>}
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Login with Google
      </button>
      {console.log(user)}
      <br />
      <input type="email" name="" id="" placeholder="Email" />
      <br />
      <input type="password" name="" id="" placeholder="Password" />
      <br />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;
