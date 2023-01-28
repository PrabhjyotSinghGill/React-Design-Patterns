import React from "react";
import ControlledForm from "./controlled-components/ControlledForm.jsx";
import UncontrolledForm from "./controlled-components/UncontrolledForm.jsx";

function Form() {
  return (
    <>
      <h4>Uncontrolled Form</h4>
      <UncontrolledForm></UncontrolledForm>
      <h4>Controlled Form</h4>
      <ControlledForm></ControlledForm>
    </>
  );
}

export default Form;
