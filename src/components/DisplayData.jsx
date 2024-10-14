const DisplayData = ({ data }) => {
  return (
    <div id="resume">
      <header>
        <h1>{data ? data.firstName.toUpperCase(): 'JOHN'} {data ? data.lastName.toUpperCase(): 'DOE'}</h1>
        <h3>{data ? data.email: 'johndoe@gmail.com'} | {data ? data.phone: '1234567890'}</h3>
        
      </header>
      <section>
        <h2>Skills</h2>
        <hr />
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>Company Name</li>
          <li>Position</li>
          <li>Job Description</li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>School Name</li>
          <li>Field of Study</li>
          <li>Degree</li>
        </ul>
      </section>
    </div>
  );
};

export default DisplayData;
