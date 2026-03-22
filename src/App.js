import React, { useState } from "react";
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";

function App() {
  const [students, setStudents] = useState([
    { name: "Rahul Sharma", email: "rahul@gmail.com", class: "10", status: "Active" },
    { name: "Priya Verma", email: "priya@gmail.com", class: "9", status: "Inactive" },
    { name: "Amit Kumar", email: "amit@gmail.com", class: "8", status: "Active" },
    { name: "Sneha Patil", email: "sneha@gmail.com", class: "7", status: "Active" },
    { name: "Rohan Das", email: "rohan@gmail.com", class: "6", status: "Inactive" }
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
        Student Management Dashboard
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />

      {/* Add Student */}
      <AddStudent students={students} setStudents={setStudents} />

      {/* Table */}
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default App;