import React from "react";
import "./ScaleBusiness.css";
import multiplelocation from "../images/multiplelocation.png";
import atithidev from "../images/atithi.png";
import VehicleLocation from "../images/VehicleLocation.png";
import ThumsUp from "../images/thumsup.png";
import Earphone from "../images/earphone.png";
import CustomerSupport from "../images/customerSupport.png";
import RealTimeTracking from "../images/RealTimeTracking.png";
import TMS from "../images/TMS.png";
import Company from "../images/Company.png";
import DelieveryBoy from "../images/Delievery.png";


const ScaleBusiness = () => {
  const features = [
    {
      title: "Pan-India PTL Transportation",
      description: "Guaranteed on-time delivery across 200+ pin codes with minimal DDA.",
      image: multiplelocation,
    },
    {
      title: "Wide Transporter Network",
      description: "Choose from 100+ transporters to ensure the best rates for your shipments.",
      image: atithidev,
    },
    {
      title: "Money-Back Guarantee",
      description: "Promised on-time delivery with a money-back guarantee for failures.",
      image: VehicleLocation
    },
    {
      title: "Real-Time Tracking",
      description: "Full visibility of your shipments from pickup to delivery.",
      image: RealTimeTracking,
    },
    {
      title: "Digital POD Access",
      description: "Seamless access to PODs online, eliminating manual processes.",

      image: ThumsUp,
    },
    {
      title: "In-Transit Insurance",
      description: "Optional insurance coverage to protect your goods during transit.",
      image: Earphone,
    },
    {
      title: "Fast Customer Support",
      description: "Reliable customer service to address queries and ensure smooth operations.",
      image: CustomerSupport,
    },
    {
      title: "Access to TMS",
      description: "Get full access to our Transport Management System (TMS) to manage bookings, track shipments, and scale your business.",
      image: TMS,
    },
  ];

  return (
    <div className="transformation-container">
      <h1>Transforming Logistics, Scaling Businesses</h1>
      <p>Simplifying transportation so you can focus on growing your business.</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <img src={feature.image} alt={feature.title} className="feature-image" />
          </div>
        ))}
      </div>
      <div className = "wrapper">
      <div className="text-container">
        <h1>Is Your Business Held Hostage by a Single Transporter?</h1>
        <p>
          With our wide range of transporter network, you gain the flexibility
          to switch and save on every shipment.
        </p>
        <button className= "btn">Sign Up</button>
      </div>
      <div className="image-container">
        <img
          src={Company}
          alt="Delievery Company"
          className="main-company"
        />
         <img
          src={DelieveryBoy}
          alt="Delievery Boy"
          className="main-Delievery"
        />

        
        
        
        
      </div>

      </div>
    </div>
  );
};

export default ScaleBusiness;