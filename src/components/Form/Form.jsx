import React, { useState, useContext } from "react";
import axios from "axios";
import "./form.scss";
import { StepContext } from "../../Contexts/StepContext";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import SucessSubmit from "./SucessSubmit";
import ErrorComponent from "./Error";
function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState({
    name: false,
    email: false,
  });

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const onChange = (e) => {
    const value = e.target.value.trim();
    if (e.target.type === "email") {
      if ((value.match(mailformat) && value !== null) || value !== "") {
        setError({ ...error, email: false });
        setEmail(value);
      } else {
        setError({ ...error, email: true });
      }
    } else {
      if (value === null || value === "") {
        setError({ ...error, name: true });
      } else {
        setError({ ...error, name: false });
        setName(value);
      }
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://troubleshooting-guided-app.herokuapp.com/api/users", {
        name,
        email,
      })
      .then((res) => {
        console.log("res", res);
        nextStep(<SucessSubmit />);
      })
      .catch((err) => {
        console.log(err);
        nextStep(<ErrorComponent />);
      });
  };
  const { nextStep } = useContext(StepContext);

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={(e) => onSubmit(e)}>
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => onChange(e)}
          required
        />
        {error.name && <span id="name-error">Please enter name</span>}
        <input
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => onChange(e)}
          required
        />
        {error.email && (
          <span id="email-error">Please enter an vaild email </span>
        )}

        <button type="submit" disabled={name && email ? false : true}>
          <DoneOutlineIcon />
        </button>
      </form>
    </div>
  );
}

export default Form;
