import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Components/Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const useFirebase = () => {
  const auth = getAuth(app);
  const googleProvide = new GoogleAuthProvider();
  const [user, setUser] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  function googleLogin() {
    console.log("lol");
    signInWithPopup(auth, googleProvide)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handlesignOut() {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return { googleLogin, handlesignOut, user };
};
export default useFirebase;
