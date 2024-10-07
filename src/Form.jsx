import "./styles/formstyles.css"
import { useState } from "react";

function PersonalFieldset() {

  return (
    <fieldset>
      <label htmlFor="name">
        Email: <input 
                    type="email" 
                    name="email"
                    required
                />
      </label>
      <label htmlFor="email">
        Email: <input 
                  type="email" 
                  name="email"
                  required
                />
      </label>
      <label htmlFor="phone">
        Phone: <input 
                    type="tel" 
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                />
      </label>
    </fieldset>
  )
}

function WorkFieldset() {

  return (
    <fieldset>
      
    </fieldset>
  )
}

function SkillsFieldset() {

  return (
    <fieldset>
      
    </fieldset>
  )
}

export default function Form({ education }) {
  const [isFilled, setIsFilled] = useState(false);

  const alterResume = () => {
    setIsFilled(true);
  }

  return (
    <form >
      <PersonalFieldset/>
      <WorkFieldset/>
      <SkillsFieldset/>
      <button onClick={alterResume}>{isFilled ? "Edit info":"Enter info"}</button>
    </form>
      
  )
}


