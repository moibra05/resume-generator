import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Form Data</h2>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
    </div>
  );
};

export default DisplayData;
