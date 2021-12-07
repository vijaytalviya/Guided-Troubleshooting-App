import { useState } from "react";
import MainPage from "./components/MainPage/MainPage.jsx";
import "./App.scss";
import StepNavigation from "./molecule/stepNavigation/StepNavigation.jsx";
import { StepContext } from "./Contexts/StepContext.jsx";
import Header from "./components/Header/Header.jsx";
function App() {
  const [totalSteps, setTotalSteps] = useState(["step 1", "step 2", "step 3"]);
  const [componentStack, setComponentStack] = useState([<MainPage />]);
  let currentStep = componentStack.length;

  const nextStep = (Component) => {
    currentStep = componentStack.length;

    setComponentStack([...componentStack, Component]);
  };

  return (
    <div className="App">
      <StepContext.Provider
        value={{
          currentStep,
          nextStep,
          componentStack,
          setComponentStack,
          setTotalSteps,
          totalSteps,
        }}
      >
        <StepNavigation labelArray={totalSteps} />
        {
          <Header
            startOver={true}
            back={
              componentStack.length > 1 && componentStack.length < 4
                ? true
                : false
            }
          />
        }

        <div className="content">
          {componentStack[componentStack.length - 1]}
        </div>
      </StepContext.Provider>
    </div>
  );
}

export default App;
