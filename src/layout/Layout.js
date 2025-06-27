import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Poppins" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: 15 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 15 }}>About</Link>
        <Link to="/guestbook" style={{ marginRight: 15 }}>GuestBook</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
