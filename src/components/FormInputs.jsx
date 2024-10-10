import { StyledInput, StyledTextInput, ErrorText } from "../styles/formstyles";
import { Formik, useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledInput>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledTextInput {...field} {...props}></StyledTextInput>
      {meta.touched && meta.error ? <ErrorText>{meta.error}</ErrorText> : null}
    </StyledInput>
  )
}

export { TextInput }