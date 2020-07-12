import React, { useEffect } from "react";
import Auth from "./UseAuth";

const LogIn = () => {
  const auth = Auth();
  const handleSignIn = () => {
    auth.signInWithGoogle().then((res) => {
      window.location.pathname = "/review";
    });
  };
  const handleSignOut = () => {
    auth.signOut().then((res) => {
      window.location.pathname = "/";
    });
  };
  // useEffect(() => {
  //   console.log(auth);
  // });
  return (
    <div>
      <h1>Join the party.</h1>
      {auth.user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default LogIn;
