import React from 'react';
import './BelowNavbar.css'; // Import the CSS file for styling
import image2 from "../images/partner.png";
import image3 from "../images/LogisticVan.png";
import image4 from "../images/ClockVan.png";
import image5 from "../images/Location.png";
const BelowNavbar = () => {
  return (
    <div className="below-navbar">
      <div className="logistics-header">
        <h2>More Than Just Logistics:<br /> Your Growth Partner</h2>
        <p>
          Our seamless logistics solutions empower brands to grow faster and smarter.
          Let's move your business forward.
        </p>
      </div>
      <div className="features">
        <div className="feature-item">
          <img src={image3} alt="Top-rated transporters" />
          <p>Get top-rated transporters at unbeatable prices</p>
        </div>
        <div className="feature-item">
          <img src={image4} alt="Guaranteed delivery" />
          <p>95% Guaranteed on-time Delivery</p>
        </div>
        <div className="feature-item">
          <img src={image5} alt="Live shipment tracking" />
          <p>Live Shipment Tracking and timely updates</p>
        </div>
      </div>
      <div className="partners-section">
        <h3>Partner with the Best</h3>
        <p>Trusted by top brands and small businesses alike.</p>
        <div className="partners-logos">
         <img src= {image2}  alt = "Logo Loading failed"/>
        </div>
      </div>
    </div>
  );
};

export default BelowNavbar;