import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPlace(data.place);
        setPhone(data.phone);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedStudent = { name, place, phone };

    fetch(`http://localhost:5000/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent),
    }).then(() => {
      navigate("/home");
    });
  };

  return (
    <div>
      <h2>Edit Student</h2>

      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Place:</label>
        <input value={place} onChange={(e) => setPlace(e.target.value)} required />

        <label>Phone:</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
