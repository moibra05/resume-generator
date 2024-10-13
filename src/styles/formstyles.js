import styled from "styled-components";
import { Form } from "formik";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
const StyledTextInput = styled.input`
  background-color: white;
`

const ErrorText = styled.div`
  color: red;
`

const SubmitButton = styled.button`

`

const StyledForm = styled(Form)`
`

export { StyledInput, StyledTextInput, StyledForm, ErrorText, SubmitButton }