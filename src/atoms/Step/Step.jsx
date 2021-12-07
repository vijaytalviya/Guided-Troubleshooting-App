import { useContext } from "react";
import { StepContext } from "../../Contexts/StepContext";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import CancleIcon from "@material-ui/icons/Cancel";
import "./step.scss";
export default function Step(props) {
  const { currentStep } = useContext(StepContext);
  return (
    <div
      className={`stepBlock ${
        currentStep > props.index + 1 ? "stepCompleted" : ""
      }`}
    >
      <div
        className={`circleWrapper ${
          currentStep > props.index + 1 ? "stepCompleted" : ""
        }`}
      >
        {currentStep == props.index + 1 ? (
          <TimelapseIcon style={{ color: "#e5d8fa" }} />
        ) : currentStep > props.index ? (
          <CheckCircleIcon style={{ color: "#6735b9" }} />
        ) : (
          <CancleIcon style={{ color: "#d2d2d7" }} />
        )}
      </div>
      <span className="stepLabel">{props.label}</span>
    </div>
  );
}
