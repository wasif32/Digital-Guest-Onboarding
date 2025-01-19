import React from "react";

const ThankYouPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#4caf50",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#000", // Set text color to black
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Thank You!</h1>
      <p style={paragraphStyle}>
        Your details have been successfully submitted.
      </p>
    </div>
  );
};

export default ThankYouPage;
