import React, { useState, useRef } from "react";
import "../../styles/addHotel.css";
import Navbar from "../Shared/Navbar";
import axios from "axios";

const AddHotelPage = () => {
  const fileInputRef = useRef(null);

  const [hotelName, setHotelName] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", hotelName);
    formData.append("address", address);
    formData.append("logo", logo);

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:5000/api/admin/addhotel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Hotel added successfully:", response.data);
        alert("Hotel added successfully!");
        setHotelName("");
        setAddress("");
        setLogo(null);
        fileInputRef.current.value = ""; // Reset file input
      } else {
        console.error("Failed to add hotel");
        alert("Failed to add hotel. Please try again.");
      }
    } catch (error) {
      console.error("Error while submitting hotel details:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
              ref={fileInputRef}
              onChange={(e) => setLogo(e.target.files[0])}
              className="add-hotel-input"
              required
            />
            <button
              type="submit"
              className="add-hotel-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddHotelPage;
