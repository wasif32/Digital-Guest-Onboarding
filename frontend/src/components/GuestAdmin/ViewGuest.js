import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Shared/Navbar";
import { useNavigate } from "react-router-dom"; // import useHistory to navigate

const ViewGuest = () => {
  const [guests, setGuests] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
          console.error("Hotel ID not found in sessionStorage");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/guest-admin/${user.hotelId}`
        );
        if (response.data.success) {
          setGuests(response.data.guests);
        } else {
          console.error("Failed to fetch guests:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };

    fetchGuests();
  }, []);

  const handleEditClick = (guestId) => {
    // Navigate to the Edit page with the guestId in the URL
    nav(`/guest-admin/dashboard/edit/${guestId}`);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f4f4f4",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Guest List
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {guests.map((guest) => (
            <div
              key={guest._id}
              style={{
                width: "300px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: "#333",
                }}
              >
                {guest.fullName}
              </div>
              <p style={{ margin: "5px 0", color: "#333" }}>
                <strong>Address:</strong> {guest.address}
              </p>
              <p style={{ margin: "5px 0", color: "#333" }}>
                <strong>Mobile:</strong> {guest.mobileNumber}
              </p>
              <p style={{ margin: "5px 0", color: "#333" }}>
                <strong>Email:</strong> {guest.email}
              </p>
              <p style={{ margin: "5px 0", color: "#333" }}>
                <strong>Purpose:</strong> {guest.purposeOfVisit}
              </p>
              <p style={{ margin: "5px 0", color: "#333" }}>
                <strong>Stay:</strong> From{" "}
                {new Date(guest.stayDates.from).toLocaleDateString()} to{" "}
                {new Date(guest.stayDates.to).toLocaleDateString()}
              </p>
              <div
                style={{
                  marginTop: "15px",
                  color: "#007bff",
                  cursor: "pointer",
                }}
                onClick={() => handleEditClick(guest._id)} // call handleEditClick with guestId
              >
                <i className="fas fa-pencil-alt card-icon"></i> Edit Details
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewGuest;
