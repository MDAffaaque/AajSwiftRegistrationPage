import React, { useState } from "react";
import "./RegistrationForm.css"; // Create a CSS file for styling

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    gstRequired: "",
    companyName: "",
    companyAddress: "",
    state: "",
    pincode: "",
    gstNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobile">Mobile No.</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label>Are you a business which needs GST invoice?</label>
        <div className="radio-group">
          <label>
            <input
              type="button"
              name="gstRequired"
              value="yes"
              checked={formData.gstRequired === "yes"}
              onChange={handleChange}
              required
            />{" "}
            
          </label>
          <label>
            <input
              type="button"
              name="gstRequired"
              value="No"
              checked={formData.gstRequired === "no"}
              onChange={handleChange}
            />{" "}
            
          </label>
        </div>

        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="companyAddress">Company Address</label>
        <input
          type="text"
          id="companyAddress"
          name="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
        />

        <div className="inline-inputs">
  <div className="input-container">
    <label htmlFor="state">State</label>
    <input
      type="text"
      id="state"
      name="state"
      value={formData.state}
      onChange={handleChange}
    />
  </div>
  <div className="input-container">
    <label htmlFor="pincode">Pincode</label>
    <input
      type="text"
      id="pincode"
      name="pincode"
      value={formData.pincode}
      onChange={handleChange}
    />
  </div>
</div>

        <label htmlFor="gstNumber">GST Number</label>
        <input
          type="text"
          id="gstNumber"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
        />

        <button type="button" className="btnAdd">
          Add New GST
        </button>

        <button type="submit" className="btn">
          Register
        </button>

        <p>
          By continuing you agree to our{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;