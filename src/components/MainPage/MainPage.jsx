import Action from "../../molecule/Action/Action";
import Heading from "../../atoms/Heading/Heading";
import Frozen from "../Frozen/Frozen";
import Stuck from "../Stuck/Stuck";
import "./MainPage.scss";
function MainPage() {
  return (
    <div className="mainPage">
      <Heading content="If your iPhone won't turn on or is frozen" />
      <div className="mainPage__container">
        <p className="mainPage__container__content">
          If your iPhone has a frozen screen, doesn't respond when you touch it,
          or becomes stuck when you turn it on, learn what to do.
        </p>
      </div>

      <Action
        qsContent="select your issue?"
        btnContent={[
          { content: "Iphone screen is black or frozen", nextStep: <Frozen /> },
          {
            content: "Iphone is stuck on the the Apple logo",
            nextStep: <Stuck />,
          },
        ]}
      />
    </div>
  );
}

export default MainPage;
