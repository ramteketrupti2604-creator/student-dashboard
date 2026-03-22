import React from "react";

function StudentTable({ students }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        backgroundColor: "white"
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#3498db", color: "white" }}>
          <th style={{ padding: "10px", border: "1px solid white" }}>Name</th>
          <th style={{ padding: "10px", border: "1px solid white" }}>Email</th>
          <th style={{ padding: "10px", border: "1px solid white" }}>Class</th>
          <th style={{ padding: "10px", border: "1px solid white" }}>Status</th>
        </tr>
      </thead>

      <tbody>
        {students.length > 0 ? (
          students.map((s, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{s.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{s.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{s.class}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <span
                  style={{
                    color: s.status === "Active" ? "green" : "red",
                    fontWeight: "bold"
                  }}
                >
                  {s.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ padding: "10px", border: "1px solid #ddd" }}>
              No students found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default StudentTable;