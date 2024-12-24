import React from "react";
import "./Footer.css"; // Or use styled-components
import image1 from "../images/aaj.png";

import Linkedin from "../images/Linkedin.png";
import Instagram from "../images/insta.png";
import Youtube from "../images/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="FooterkeUpar">
        <div className="Aaj-logo">
          <span className="logo-text">
            <img src={image1} alt="Logo" />
          </span>
        </div>
        <div className="Likhawat">
          <p>Optimizing supply chains through warehousing and transportation services</p>
        </div>
        <div className = "SocialMediaLogo">
        <img src= {Linkedin} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
          <img  src={Youtube} alt="YouTube" />
        </div>
        
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">Our Story</a>
            <a href="#">Careers at AAJ</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <a href="#">E-Commerce Fulfillment</a>
            <a href="#">Transport at AAJ Swift</a>
            <a href="#">Network Management</a>
            <a href="#">Value-Added Services</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Case Studies</a>
            <a href="#">Blogs</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#">Track Your Order</a>
          </div>
          <div className="footer-section">
            <h4>Transportation Network</h4>
            <a href="#">Transportation in Mumbai</a>
            <a href="#">Transportation in Bengaluru</a>
            <a href="#">Transportation in Delhi</a>
            <a href="#">Transportation in Hyderabad</a>
            <a href="#">Transportation in Surat/NCR</a>
          </div>
        </div>
       
        <div className="footer-bottom">
          ©2024 AAJ Swift. All Rights Reserved. | CIN: XXXXXXXX | GST: XXXXXXXX
        </div>
      </footer>
    </>
  );
};

export default Footer;
