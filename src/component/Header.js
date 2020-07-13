import React from "react";
import "./Header.css";
import { useAuth } from "./LogIn/UseAuth";

const Header = () => {
  const auth = useAuth();
  return (
    <div className="header">
      <img src="../images/logo.png" alt="" />
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
