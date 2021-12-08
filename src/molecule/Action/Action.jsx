import Button from "../../atoms/Button/Button";
import Question from "../../atoms/Question/Question";
import "./action.scss";

function Action(props) {
  return (
    <div className="action">
      <Question content={props.qsContent} />
      <div className="action__buttons">
        {props.btnContent.map((obj, index) => (
          <Button key={index} content={obj.content} nextStep={obj.nextStep} />
        ))}
      </div>
    </div>
  );
}

export default Action;
