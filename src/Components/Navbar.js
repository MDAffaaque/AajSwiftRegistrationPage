import React from "react";
import "./Navbar.css";
import image1 from "../images/aaj.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">
          <img src={image1} alt="Logo" />
        </span>
      </div>

      <div className="navbar-links">
        <div className="center-links">
          <a href="/company">Company</a>
          <a href="/calculate-shipping-cost">Calculate Shipping Cost</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <div className="right-links">
          <a href="/track-shipment" className="highlight">Track Shipment</a>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
