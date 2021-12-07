import React from "react";
import Form from "../Form/Form";
import Action from "../../molecule/Action/Action";
import Finished from "./Finished";
import Heading from "../../atoms/Heading/Heading";
function Step2() {
  return (
    <div>
      <Heading content=" Check your hardware and charge your phone. " />
      <p>
        <a
          style={{ color: "#0070c9" }}
          href="https://support.apple.com/en-us/HT201569#slow"
          target="_blank"
        >
          follow these steps to check your hardware and charge your phone
        </a>
        . You might need to charge for up to an hour.
      </p>
      <Action
        qsContent="Is your phone turn on?"
        btnContent={[
          { content: "Yes", nextStep: <Finished /> },
          {
            content: "No",
            nextStep: <Form />,
          },
        ]}
      />
    </div>
  );
}

export default Step2;
