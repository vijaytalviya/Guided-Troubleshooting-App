import { useContext } from "react";
import { StepContext } from "../../Contexts/StepContext";
import "./button.scss";
function Button(props) {
  const { nextStep } = useContext(StepContext);
  return (
    <button
      className="btn"
      onClick={() => {
        nextStep(props.nextStep);
      }}
    >
      {props.content}
    </button>
  );
}

export default Button;
