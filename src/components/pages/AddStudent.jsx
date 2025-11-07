import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = { name, place, phone };

    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    }).then(() => {
      navigate("/home");
    });
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Place:</label>
        <input value={place} onChange={(e) => setPlace(e.target.value)} required />

        <label>Phone:</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
