import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="page-header">
      <div className="container">
        <nav className="page-navbar">
          <div className="logo-container">
            <Link to="/">
              <img src={"/logo.png"} alt="Page Logo" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
