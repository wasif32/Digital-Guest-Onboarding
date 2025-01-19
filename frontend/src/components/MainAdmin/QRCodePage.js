import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const QrCodePage = () => {
  const location = useLocation(); // Access the location object
  const [qrcode, setQrcode] = useState(null);

  useEffect(() => {
    if (location.state && location.state.qrcode) {
      setQrcode(location.state.qrcode); // Set QR code from state
    }
  }, [location.state]);

  if (!qrcode) {
    return <div>No QR Code available</div>;
  }

  const handleWhatsAppShare = () => {
    const message = `Check out this QR Code:\n${qrcode}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailShare = () => {
    const subject = "Check out this QR Code";
    const body = `Here is a QR code you might find useful. Download the attached image or copy the following:\n\n${qrcode}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrcode;
    link.download = "QRCode.png";
    link.click();
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h1 style={{ padding: "10px" }}>QR Code</h1>
        <img src={qrcode} alt="Hotel QR Code" width="300" height="300" />
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleWhatsAppShare}
            style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
          >
            Share on WhatsApp
          </button>
          <button
            onClick={handleEmailShare}
            style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
          >
            Share via Email
          </button>
          <button
            onClick={handleDownload}
            style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default QrCodePage;
