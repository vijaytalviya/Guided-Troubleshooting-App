import React from "react";
import Tabs, { Tab } from "../../molecule/Tabs/Tabs";
import Action from "../../molecule/Action/Action";
import Finished from "../Frozen/Finished";
import Form from "../Form/Form";
import "./stuck.scss";
function Step2() {
  const Iphone8Steps = [
    "Press and quickly release the volume up button. Press and quickly release the volume down button. Then press and hold the side button.",
  ];
  const Iphone7Steps = [
    "Press and hold the side button and volume down button at the same time.",
  ];
  const iphone6Steps = [
    " Press and hold both the Home button and the side button or the top button at the same time.",
  ];

  return (
    <div>
      <p>While your iPhone is connected , follow these steps:</p>

      <Tabs>
        <Tab title="iPhone 8 or later">
          <div className="tab-content">
            <ol>
              {Iphone8Steps.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
            <img
              alt=""
              src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-x-later-force-restart-animation.gif"
            />
          </div>
        </Tab>
        <Tab title="iphone7/7+">
          <div className="tab-content">
            <ul>
              {Iphone7Steps.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <img
              alt=""
              src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone7-force-restart.png"
            />
          </div>
        </Tab>
        <Tab title="iphone6 /6s">
          <div className="tab-content">
            <ul>
              {iphone6Steps.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </Tab>
      </Tabs>
      <ul>
        <li>
          Keep holding the buttons until you see the recovery mode screen.
          <br />
          <img
            alt=""
            height="200px"
            src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-x-later-restore-screen.png"
          />
        </li>
        <li>
          When you get the option to restore or update, choose Update.
          <br />
          <img
            alt=""
            width="100%"
            src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-macos-big-sur-recovery-mode-iphone-update.jpg"
          />
        </li>
        <li>
          Your computer will download the software for your device. If it takes
          more than 15 minutes, your device will exit recovery mode. Repeat
          steps 1-3.
        </li>
      </ul>
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
