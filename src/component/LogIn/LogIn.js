import React from "react";
import Auth from "./UseAuth";

const LogIn = () => {
  const auth = Auth();
  console.log(auth);
  return (
    <div>
      <h1>Join the party.</h1>
      <button onClick={auth.signInWithGoogle}>Sign In</button>
    </div>
  );
};

export default LogIn;
