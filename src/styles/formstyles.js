import styled from "styled-components";
import { Form } from "formik";
import { TextInput } from "../components/FormInputs";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledTextInput = styled.input`
  background-color: white;
`

const ErrorText = styled.div`

`

const SubmitButton = styled.button`

`

export { StyledInput, StyledTextInput, ErrorText, SubmitButton }