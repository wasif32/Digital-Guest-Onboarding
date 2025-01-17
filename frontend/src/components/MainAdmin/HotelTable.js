import React, { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar";
import "../../styles/viewHotel.css";

const HotelTable = () => {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   // Fetch hotel data from API
  //   const fetchHotels = async () => {
  //     // Replace with real API call
  //     const mockHotels = [
  //       { id: 1, name: "Hotel One", address: "123 Street", qrCode: "#" },
  //       { id: 2, name: "Hotel Two", address: "456 Avenue", qrCode: "#" },
  //     ];
  //     setHotels(mockHotels);
  //   };

  //   fetchHotels();
  // }, []);

  return (
    <>
      <Navbar />
      <div className="table-body">
        <div className="card-list">
          <div className="card-item">
            <img
              src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg"
              alt="Card-Image"
            ></img>
            <span className="developer">Developer</span>
            <h3>A "developer" codes software and websites.</h3>
            <div class="arrow">
              <i class="fas fa-arrow-right card-icon"></i>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg"
              alt="Card-Image"
            ></img>
            <span className="developer">Developer</span>
            <h3>A "developer" codes software and websites.</h3>
            <div class="arrow">
              <i class="fas fa-arrow-right card-icon"></i>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg"
              alt="Card-Image"
            ></img>
            <span className="developer">Developer</span>
            <h3>A "developer" codes software and websites.</h3>
            <div class="arrow">
              <i class="fas fa-arrow-right card-icon"></i>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg"
              alt="Card-Image"
            ></img>
            <span className="developer">Developer</span>
            <h3>A "developer" codes software and websites.</h3>
            <div class="arrow">
              <i class="fas fa-arrow-right card-icon"></i>
            </div>
          </div>

          <div className="card-item">
            <img
              src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg"
              alt="Card-Image"
            ></img>
            <span className="designer">Designer</span>
            <h3>A "designer" is a design expert.</h3>
            <div class="arrow">
              <i class="fas fa-arrow-right card-icon"></i>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg"
              alt="Card-Image"
            ></img>
            <span className="editor">Editor</span>
            <h3>An "editor" ensures content quality and accuracy.</h3>
            <div class="arrow">
              <i class="fas fa-arrow-right card-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelTable;
