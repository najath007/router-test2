import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ViewStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/students/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Student Details</h2>

      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Place:</strong> {student.place}</p>
      <p><strong>Phone:</strong> {student.phone}</p>

      <Link to="/home">Back</Link>
    </div>
  );
}

export default ViewStudent;
