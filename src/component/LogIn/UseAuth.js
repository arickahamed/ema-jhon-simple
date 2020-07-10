import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from "react";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.provider value={auth}>{props.children}</AuthContext.provider>
  );
};

const Auth = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setUser(signedInUser);
        return res.user;
      })
      .catch((err) => {
        setUser(null);
        return err.message;
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return {
    user,
    signInWithGoogle,
    signOut,
  };
};

export default Auth;
