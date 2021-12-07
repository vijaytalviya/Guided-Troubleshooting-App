import React, { useContext } from "react";
import { StepContext } from "../../Contexts/StepContext";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ReplaySharpIcon from "@material-ui/icons/ReplaySharp";
import "./header.scss";
function Header(props) {
  const { setComponentStack, componentStack } = useContext(StepContext);
  console.log("va", props.back, props.ystartOver);
  return (
    <div className="header">
      {props.back && (
        <span
          className="header__btn backBtn"
          onClick={() => setComponentStack(componentStack.slice(0, -1))}
        >
          <KeyboardBackspaceIcon />
        </span>
      )}

      {props.startOver && (
        <span
          className="header__btn startOverBtn"
          onClick={() => {
            setComponentStack([componentStack[0]]);
          }}
        >
          <ReplaySharpIcon />
        </span>
      )}
    </div>
  );
}

export default Header;
