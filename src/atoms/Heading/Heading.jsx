import "./heading.scss";
function Heading(props) {
  return (
    <div className="Heading">
      <p>{props.content}</p>
    </div>
  );
}

export default Heading;
