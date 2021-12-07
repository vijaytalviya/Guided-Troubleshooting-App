import Step from "../../atoms/Step/Step";
import "./stepsNavigation.scss";
export default function StepNavigation(props) {
  return (
    <div className="stepWrapper">
      {props.labelArray.map((item, index) => (
        <Step key={index} index={index} label={item}></Step>
      ))}
    </div>
  );
}
