import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "../../Hooks/Usefirebase";
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  return (
    <nav className="header">
      <Link to="/">Home</Link>

      <Link to="/order">Orders</Link>
      <Link to="/review">ReviewS</Link>
      {!user?.uid ? (
        <Link to="/login">Login</Link>
      ) : (
        <a
          onClick={() => {
            signOut(auth);
          }}
        >
          signOut
        </a>
      )}
      {user && <p>{user.displayName}</p>}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Header;
