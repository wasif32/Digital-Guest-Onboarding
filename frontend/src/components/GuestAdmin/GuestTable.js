import React, { useState, useEffect } from "react";
import "../../styles/addHotel.css";
import Navbar from "../Shared/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const GuestTable = () => {
  const { guestId } = useParams(); // guestId and hotelId from URL
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [purposeOfVisit, setPurposeOfVisit] = useState("");
  const [stayDates, setStayDates] = useState({ from: "", to: "" });
  const [email, setEmail] = useState("");
  const [idProofNumber, setIdProofNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/guest-admin/guests/${guestId}`
        );
        if (response.status === 200) {
          const guest = response.data.guest;

          // Format the date to yyyy-MM-dd
          const formattedFromDate = new Date(guest.stayDates.from)
            .toISOString()
            .split("T")[0];
          const formattedToDate = new Date(guest.stayDates.to)
            .toISOString()
            .split("T")[0];

          setFullName(guest.fullName);
          setMobileNumber(guest.mobileNumber);
          setAddress(guest.address);
          setPurposeOfVisit(guest.purposeOfVisit);
          setStayDates({ from: formattedFromDate, to: formattedToDate });
          setEmail(guest.email);
          setIdProofNumber(guest.idProofNumber);
        }
      } catch (error) {
        console.error("Error fetching guest data:", error);
        alert("Failed to fetch guest data");
      }
    };

    fetchGuestData();
  }, [guestId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const guestData = {
      fullName,
      mobileNumber,
      address,
      purposeOfVisit,
      stayDates: {
        from: stayDates.from,
        to: stayDates.to,
      },
      email,
      idProofNumber,
    };

    try {
      setIsSubmitting(true);
      const response = await axios.put(
        `http://localhost:5000/api/guest-admin/guests/${guestId}`,
        guestData, // Send data as JSON
        {
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );

      if (response.status === 200) {
        console.log("Guest updated successfully:", response.data);
        alert("Guest updated successfully!");
      }
    } catch (error) {
      console.error("Error while submitting updated guest details:", error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message || "Failed to update guest");
      } else {
        alert("An error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="add-hotel-page-container"
        style={{
          overflow: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="add-hotel-right-col"
          style={{ marginLeft: "100px", marginTop: "-150px" }}
        >
          <h1 className="add-hotel-title" style={{ marginRight: "40px" }}>
            Edit Guest
          </h1>
          <p className="add-hotel-description" style={{ marginRight: "40px" }}>
            Modify the guest details
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
              style={{ marginBottom: "50px" }}
            >
              {isSubmitting ? "Submitting..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GuestTable;
