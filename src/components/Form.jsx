import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./FormInputs";

const schema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const InfoForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />
        <TextInput
          label="Last name"
        ></TextInput>
      </Form>
    </Formik>
  );
};

export default InfoForm;
