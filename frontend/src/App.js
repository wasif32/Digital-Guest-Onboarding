import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Shared/LoginForm";
import MainAdminDashboard from "./components/MainAdmin/Dashboard";
import GuestAdminDashboard from "./components/GuestAdmin/Dashboard";
import LandingPage from "./components/Guest/LandingPage";
import AddHotelPage from "./components/MainAdmin/AddHotel";
import HotelTable from "./components/MainAdmin/HotelTable";
import ViewGuest from "./components/GuestAdmin/ViewGuest";
import QrCodePage from "./components/MainAdmin/QRCodePage";
import GuestTable from "./components/GuestAdmin/GuestTable";
import ThankYouPage from "./components/Guest/ThankYouPage";
import "../src/styles/main.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/main-admin/dashboard" element={<MainAdminDashboard />} />
        <Route
          path="/main-admin/dashboard/view-hotels"
          element={<HotelTable />}
        />
        <Route
          path="/main-admin/dashboard/add-hotel"
          element={<AddHotelPage />}
        />
        <Route
          path="/guest-admin/dashboard"
          element={<GuestAdminDashboard />}
        />
        <Route
          path="/guest-admin/dashboard/view-guest"
          element={<ViewGuest />}
        />
        <Route
          path="/main-admin/dashboard/view-hotels/qr"
          element={<QrCodePage />}
        />
        <Route
          path="/guest-admin/dashboard/edit/:guestId"
          element={<GuestTable />}
        />
        <Route path="/hotel/:hotelId" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
};

export default App;
