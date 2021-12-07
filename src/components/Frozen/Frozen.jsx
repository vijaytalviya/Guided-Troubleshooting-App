import Heading from "../../atoms/Heading/Heading";
import Tabs, { Tab } from "../../molecule/Tabs/Tabs";
import Action from "../../molecule/Action/Action";
import Finished from "./Finished";
import Step2 from "./Step2";
import "./fronzen.scss";
const Iphone8Steps = [
  "Press and quickly release the volume up button.",
  "Press and quickly release the volume down button.",
  "Press and hold the side button until you see the Apple logo.",
];
const Iphone7Steps = [
  "Press and hold both the side button and the volume down button until you see the Apple logo",
];
const iphone6Steps = [
  "Press and hold both the Home button and the side button or the top button until you see the Apple logo.",
];
function Frozen(props) {
  return (
    <div className="frozen">
      <Heading content="If your screen is black or frozen" />
      <p>Follow the steps for your device.</p>
      <Tabs>
        <Tab title="iPhone 8 or later">
          <div className="tab-content">
            <ul>
              {Iphone8Steps.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-x-later-force-restart-animation.gif" />
          </div>
        </Tab>
        <Tab title="iphone7/7+">
          <div className="tab-content">
            <ul>
              {Iphone7Steps.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone7-force-restart.png" />
          </div>
        </Tab>
        <Tab title="iphone6 /6s">
          <div className="tab-content">
            <ul>
              {iphone6Steps.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </Tab>
      </Tabs>
      <Action
        qsContent="Is your phone turn on?"
        btnContent={[
          { content: "Yes", nextStep: <Finished /> },
          {
            content: "No",
            nextStep: <Step2 />,
          },
        ]}
      />
    </div>
  );
}

export default Frozen;
