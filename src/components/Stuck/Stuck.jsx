import Heading from "../../atoms/Heading/Heading";
import Step2 from "./Step2";
import Action from "../../molecule/Action/Action";

function Stuck(props) {
  const commonSteps = [
    "Connect your iPhone to a computer. On a Mac with macOS Catalina, open the Finder. On a Mac with macOS Mojave or earlier, or on a PC, open iTunes. Find out which macOS your Mac is using.",
    "Select your iPhone on your computer.",
  ];

  return (
    <div className="stuck">
      <Heading content="If your iPhone turns on but gets stuck during start up" />
      <p>
        If you see the Apple logo or a red or blue screen during startup, try
        these steps:
      </p>
      <ul>
        {commonSteps.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Action
        qsContent="Press 'Continue' when you complete the above steps"
        btnContent={[{ content: "Continue", nextStep: <Step2 /> }]}
      />
    </div>
  );
}

export default Stuck;
