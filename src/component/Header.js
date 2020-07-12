import React from "react";
import "./Header.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useAuth } from "./LogIn/UseAuth";

const usePrevious = (value) => {
  const prev = useRef();
  // useEffect(() => {
  //   console.log(value);
  //   prev.current = value;
  // });
  return prev.current;
};

const Header = () => {
  const auth = useAuth();
  // useEffect(() => {
  //   console.log(auth);
  // }, []);

  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <div className="header">
      <h1>
        Count:{count} Previous:{previous}
      </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/inventory">Manage Inventory</a>
        {auth.user && (
          <span style={{ color: "yellow" }}> Hey {auth.user.name}</span>
        )}
        {auth.user ? (
          <a href="/login">Sign Out</a>
        ) : (
          <a href="/login">Sign In</a>
        )}
      </nav>
    </div>
  );
};

export default Header;
