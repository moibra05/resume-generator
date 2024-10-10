import { Formik } from "formik";

const Fieldset = ({ name }) => {
  return (
    <fieldset>
      <label htmlFor={name}></label>
    </fieldset>
  );
};

function PersonalFieldset() {
  return (
    <fieldset>
      <label htmlFor="name">
        Email: <input type="email" name="email" required />
      </label>
      <label htmlFor="email">
        Email: <input type="email" name="email" required />
      </label>
      <label htmlFor="phone">
        Phone:{" "}
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </label>
    </fieldset>
  );
}

function WorkFieldset() {
  return <fieldset></fieldset>;
}

function SkillsFieldset() {
  return <fieldset></fieldset>;
}
