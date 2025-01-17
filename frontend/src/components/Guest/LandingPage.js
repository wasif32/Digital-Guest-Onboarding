import React, { useState } from "react";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    purpose: "",
    stayFrom: "",
    stayTo: "",
    email: "",
    idProof: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div>
      <h1>Guest Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />
        {/* Add other input fields similarly */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LandingPage;
