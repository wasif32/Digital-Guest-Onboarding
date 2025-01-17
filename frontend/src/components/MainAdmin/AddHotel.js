import React, { useState } from "react";
import "../../styles/addHotel.css";
import Navbar from "../Shared/Navbar";

const AddHotelPage = () => {
  const [hotelName, setHotelName] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("hotelName", hotelName);
    formData.append("address", address);
    formData.append("logo", logo);

    console.log("Hotel Details Submitted:", { hotelName, address, logo });
  };

  return (
    <>
      <Navbar />
      <div className="add-hotel-page-container">
        <div className="add-hotel-left-col"></div>
        <div className="add-hotel-right-col">
          <h1 className="add-hotel-title">Add Hotel</h1>
          <p className="add-hotel-description">
            Fill this form to add a new hotel
          </p>
          <form onSubmit={handleSubmit} className="add-hotel-form">
            <label htmlFor="hotelName" className="add-hotel-label">
              Hotel Name
            </label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              value={hotelName}
              placeholder="Enter Hotel Name"
              onChange={(e) => setHotelName(e.target.value)}
              className="add-hotel-input"
              required
            />
            <label htmlFor="address" className="add-hotel-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              className="add-hotel-input"
              required
            />
            <label htmlFor="logo" className="add-hotel-label">
              Hotel Logo
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files[0])}
              className="add-hotel-input"
              required
            />
            <button type="submit" className="add-hotel-submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddHotelPage;
