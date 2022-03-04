import { useState } from "react";

import PropTypes from "prop-types";

const Stepper = (props) => {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);
  const totalStep = stepsKeys.length;

  const [currentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );
  const indexStep = parseInt(stepsKeys.indexOf(currentStep));

  const prevStep = () => {
    if (indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  };

  const nextStep = () => {
    if (indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  };

  return <>{props.children(prevStep, nextStep, currentStep, steps)}</>;
};

Stepper.propTypes = {
  children: PropTypes.any,
  steps: PropTypes.object.isRequired,
  initialStep: PropTypes.string,
};

export default Stepper;
