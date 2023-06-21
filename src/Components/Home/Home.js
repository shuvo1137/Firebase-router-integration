import React from "react";
import useFirebase from "../../Hooks/Usefirebase";

const Home = () => {
  const { user } = useFirebase();
  return <div>{user ? user.displayname : "nobody here"}</div>;
};

export default Home;
