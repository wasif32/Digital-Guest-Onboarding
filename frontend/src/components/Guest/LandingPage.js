import React, { useState, useRef, useEffect } from "react";
import "../../styles/addHotel.css";
import Navbar from "../Shared/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const LandingPage = () => {
  const { hotelId } = useParams();
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [purposeOfVisit, setPurposeOfVisit] = useState("");
  const [stayDates, setStayDates] = useState({ from: "", to: "" });
  const [email, setEmail] = useState("");
  const [idProofNumber, setIdProofNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("mobileNumber", mobileNumber);
    formData.append("address", address);
    formData.append("purposeOfVisit", purposeOfVisit);
    formData.append("stayDates[from]", stayDates.from);
    formData.append("stayDates[to]", stayDates.to);
    formData.append("email", email);
    formData.append("idProofNumber", idProofNumber);

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        `http://localhost:5000/api/guest/${hotelId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Guest added successfully:", response.data);
        alert("Guest added successfully!");
        setFullName("");
        setMobileNumber("");
        setAddress("");
        setPurposeOfVisit("");
        setStayDates({ from: "", to: "" });
        setEmail("");
        setIdProofNumber("");
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("Error while submitting guest details:", error);

      // Check for the response error message
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message || "Failed to add guest");
      } else {
        alert("An error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="add-hotel-page-container"
        style={{
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="add-hotel-right-col"
          style={{ marginLeft: "100px", marginTop: "-100px" }}
        >
          <h1 className="add-hotel-title" style={{ marginRight: "40px" }}>
            Add Guest
          </h1>
          <p className="add-hotel-description" style={{ marginRight: "40px" }}>
            Fill this form to add a new guest
          </p>
          <form
            onSubmit={handleSubmit}
            className="add-hotel-form"
            style={{ marginLeft: "20px" }}
          >
            <label htmlFor="fullName" className="add-hotel-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              placeholder="Enter Full Name"
              onChange={(e) => setFullName(e.target.value)}
              className="add-hotel-input"
              required
            />

            <label htmlFor="mobileNumber" className="add-hotel-label">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              placeholder="Enter Mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
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
            />

            <label htmlFor="purposeOfVisit" className="add-hotel-label">
              Purpose of Visit
            </label>
            <select
              id="purposeOfVisit"
              name="purposeOfVisit"
              value={purposeOfVisit}
              onChange={(e) => setPurposeOfVisit(e.target.value)}
              className="add-hotel-input"
              required
            >
              <option value="">Select Purpose</option>
              <option value="Business">Business</option>
              <option value="Personal">Personal</option>
              <option value="Tourist">Tourist</option>
            </select>

            <label htmlFor="stayDatesFrom" className="add-hotel-label">
              Stay Dates (From)
            </label>
            <input
              type="date"
              id="stayDatesFrom"
              name="stayDatesFrom"
              value={stayDates.from}
              onChange={(e) =>
                setStayDates({ ...stayDates, from: e.target.value })
              }
              className="add-hotel-input"
              required
            />

            <label htmlFor="stayDatesTo" className="add-hotel-label">
              Stay Dates (To)
            </label>
            <input
              type="date"
              id="stayDatesTo"
              name="stayDatesTo"
              value={stayDates.to}
              onChange={(e) =>
                setStayDates({ ...stayDates, to: e.target.value })
              }
              className="add-hotel-input"
              required
            />

            <label htmlFor="email" className="add-hotel-label">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter Email ID"
              onChange={(e) => setEmail(e.target.value)}
              className="add-hotel-input"
            />

            <label htmlFor="idProofNumber" className="add-hotel-label">
              ID Proof Number
            </label>
            <input
              type="text"
              id="idProofNumber"
              name="idProofNumber"
              value={idProofNumber}
              placeholder="Enter ID Proof Number"
              onChange={(e) => setIdProofNumber(e.target.value)}
              className="add-hotel-input"
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

export default LandingPage;
