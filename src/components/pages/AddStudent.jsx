import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  // ✅ Load current students to find the next ID
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Generate a numeric ID automatically
    const newId =
      students.length > 0
        ? Math.max(...students.map((s) => Number(s.id) || 0)) + 1
        : 1;

    const newStudent = { id: newId, name, place, phone };

    // ✅ Send POST request
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then(() => {
        alert("🎉 Student added successfully!");
        navigate("/home");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit} className="form-section">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
          required
        />

        <label>Place:</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter place"
          required
        />

        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          required
        />

        <button type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
