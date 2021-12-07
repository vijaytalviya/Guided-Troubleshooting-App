import React, { useContext, useEffect } from "react";
import { StepContext } from "../../Contexts/StepContext";
import Question from "../../atoms/Question/Question";
function Finished() {
  const { setTotalSteps, currentStep, totalSteps } = useContext(StepContext);
  const newSteps = totalSteps.slice(0, currentStep);
  useEffect(() => {
    setTotalSteps(newSteps);
  }, []);
  return (
    <div>
      <Question content="Thank you for trying out the guide" />
    </div>
  );
}

export default Finished;
