import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <p>What should we call you?</p>
     
    </>
  );
};

export default Step2;
