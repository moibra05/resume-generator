import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import DisplayData from "./DisplayData";
import { TextInput } from "./FormInputs";
import { StyledForm } from "../styles/formstyles";
import ResumeSection from "./ResumeFieldset";

const schema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches("^[0-9]{10}$", "Invalid phone number")
    .required("Required"),
});

const InfoForm = () => {
  const [formData, setFormData] = useState(null);

  const onSubmit = (values, { setSubmitting }) => {
    setFormData(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <ResumeSection>
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="jane.doe@example.com"
            />
            <TextInput
              label="Phone"
              name="phone"
              type="text"
              placeholder="1234567890"
            />
          </ResumeSection>

          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
      {formData ? <DisplayData data={formData} />:<DisplayData/>}
    </>
  );
};

export default InfoForm;
