import { StyledInput, StyledTextInput, ErrorText } from "../styles/formstyles";
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledInput>
      <label>
        {label}
      </label>
      <StyledTextInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorText className="error">{meta.error}</ErrorText>
      ) : null}
    </StyledInput>
  );
};

export { TextInput };