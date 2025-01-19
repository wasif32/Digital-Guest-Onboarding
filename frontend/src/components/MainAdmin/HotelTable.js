import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import axios from "axios";
import "../../styles/viewHotel.css";

const HotelTable = () => {
  const [hotels, setHotels] = useState([]); // Store hotel data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle error

  const nav = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/gethotel"
        );
        setHotels(response.data.hotels); // Set the fetched data to the state
        setLoading(false); // Set loading state to false after data is fetched
      } catch (err) {
        setError("Failed to fetch hotels"); // Handle any errors
        setLoading(false); // Set loading state to false even in case of error
      }
    };
    fetchHotels();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div>Loading...</div>
      </>
    ); // Show a loading message while data is being fetched
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div>{error}</div>
      </>
    ); // Show an error message if the fetch fails
  }

  return (
    <>
      <Navbar />
      <div className="table-body">
        <div className="card-list">
          {hotels.map((hotel) => (
            <div className="card-item" key={hotel._id || hotel.id}>
              {" "}
              {/* Use hotel._id or hotel.id */}
              <img
                src={`http://localhost:5000${hotel.logo}`}
                alt="Hotel Logo"
              />
              <span className="developer">{hotel.name}</span>
              <h3>{hotel.address}</h3>
              <div
                className="arrow"
                onClick={() => {
                  // Navigate to the QrCodePage and pass the QR code using state
                  nav("/main-admin/dashboard/view-hotels/qr", {
                    state: { qrcode: hotel.qrCode }, // Pass the QR code here
                  });
                }}
              >
                <i className="fas fa-arrow-right card-icon"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelTable;
