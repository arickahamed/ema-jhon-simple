import React from "react";
import "./Header.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const usePrevious = (value) => {
  const prev = useRef();
  useEffect(() => {
    console.log(value);
    prev.current = value;
  });
  return prev.current;
};

const Header = () => {
  //const user = useContext(UserContext);
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
        <span style={{ color: "yellow" }}>{}</span>
      </nav>
    </div>
  );
};

export default Header;
