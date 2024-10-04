import "./styles/formstyles.css"
import { useState } from "react";

export default function Form({ education }) {
  const [isFilled, setIsFilled] = useState(false);

  const alterResume = () => {
    setIsFilled(true);
  }

  return (
    <form >
      
      <button onClick={alterResume}>{isFilled ? "Edit info":"Enter info"}</button>
    </form>
      
  )
}


