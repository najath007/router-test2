import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);
  
  const loadData = () => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  // ✅ Delete function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      fetch(`http://localhost:5000/students/${id}`, {
        method: "DELETE",
      }).then(() => {
        loadData(); // reload table after delete
      });
    }
  };

  return (
    <div className="container">
      <h1>STUDENTS DETAILS</h1>

      <div className="table-section">
        <div className="top-bar">
          <Link to="/add" className="add-btn">Add Student</Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.place}</td>
                <td>{stu.phone}</td>

                <td>
                  {/* ✅ View Button */}
                  <Link to={`/view/${stu.id}`} className="btn-view">
                    View
                  </Link>

                  {/* ✅ Edit Button */}
                  <Link to={`/edit/${stu.id}`} className="btn-edit">
                    Edit
                  </Link>

                  {/* ✅ Delete Button */}
                  <button
                    onClick={() => handleDelete(stu.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
