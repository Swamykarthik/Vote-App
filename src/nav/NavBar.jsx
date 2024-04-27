import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { isLoggedIn, setLoggedIn } = useAuth();

  const handleLogout = () => {
    // Implement your logout logic and set isLoggedIn to false
    setLoggedIn(false);
  };

  return (
    <nav className="main-nav">
      <div className="menu-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/Login" className="loginbutton">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
