import React, { useEffect } from "react";
import Auth from "./UseAuth";

const LogIn = () => {
  const auth = Auth();
  useEffect(() => {
    console.log(auth);
  });
  return (
    <div>
      <h1>Join the party.</h1>
      {auth.user ? (
        <button onClick={auth.signOut}>Sign Out</button>
      ) : (
        <button onClick={auth.signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default LogIn;
