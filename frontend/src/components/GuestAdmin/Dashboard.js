import React from "react";
import Navbar from "../Shared/Navbar"; // Import Navbar component
// import AddHotelPage from "./AddHotelPage"; // Add Hotel page component
// import ViewHotelsPage from "./ViewHotelsPage"; // View Hotels page component

const GuestAdminDashboard = () => {
  return (
    <div>
      <Navbar /> {/* Navbar imported here */}
      <div style={{ padding: "20px" }}>
        {/* Welcome message directly rendered here */}
        <div style={{ paddingBottom: "20px", marginTop: "40px" }}>
          <h1>Welcome to the Online Guest Onboarding System</h1>
          <p>Manage hotels, view registered hotels, and more from here.</p>
        </div>

        {/* You can keep routes here for other components */}
        {/* <AddHotelPage /> */}
        {/* <ViewHotelsPage /> */}
      </div>
    </div>
  );
};

export default GuestAdminDashboard;
