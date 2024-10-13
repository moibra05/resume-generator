const DisplayData = ({ data }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Form Data</h2>
      <p>
        <strong>First Name:</strong> {data ? data.firstName: 'John'}
      </p>
      <p>
        <strong>Last Name:</strong> {data ? data.lastName: 'Doe'}
      </p>
      <p>
        <strong>Email:</strong> {data ? data.email: 'johndoe@gmail.com'}
      </p>
      <p>
        <strong>Phone:</strong> {data ? data.phone: '1234567890'}
      </p>
    </div>
  );
};

export default DisplayData;
