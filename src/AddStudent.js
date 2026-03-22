import React, { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !studentClass) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      name,
      email,
      class: studentClass,
      status: "Active"
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setStudentClass("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "10px",
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
      />

      <input
        placeholder="Class"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;