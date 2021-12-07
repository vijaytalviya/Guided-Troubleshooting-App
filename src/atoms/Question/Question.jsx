import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "./question.scss";
function Question(props) {
  return (
    <div className="Question">
      <ErrorOutlineIcon />
      <p className="Question__qs"> {props.content}</p>
    </div>
  );
}

export default Question;
