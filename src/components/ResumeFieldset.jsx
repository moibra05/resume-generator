import { useState } from "react";

const ResumeSection = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  if(!isOpen) {
    return (
      <fieldset>
        <button
          type="button"
          onClick={toggleOpen}
        >
          Open
        </button>
      </fieldset>
    );
  }

  return (
    <fieldset>
      <button
        type="button"
        onClick={toggleOpen}
      >
        Close
      </button>
      {children}
    </fieldset>
  );
};

export default ResumeSection;
