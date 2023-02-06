import { useState } from "react";
import { StepContext } from "./StepContext";

import StepForm from "../components/StepsForm/StepForm";
import StepYourPlan from "../components/StepsPlan/StepYourPlan";
import StepServices from "../components/StepsServices/StepServices";
import StepFinish from "../components/StepFinish";
import StepThanks from "../components/StepThanks";

export default function StepProvider({ children }) {
  const [valueCurrentStep, setValueCurrentStep] = useState(0);

  const [controlSendForm, setControlSendForm] = useState(false);

  const contentInfoStepsArray = [
    <StepForm />,
    <StepYourPlan />,
    <StepServices />,
    <StepFinish />,
    <StepThanks />,
  ];

  const [altStateMonthYear, setAltStateMonthYear] = useState(true);
  const [yourPlanSelect, setYourPlanSelect] = useState({
    planType: "Arcade",
    planValue: "$9/mo",
    planTime: "Monthly",
  });

  const [arrayValuesServices, setArrayValuesServices] = useState([]);

  return (
    <StepContext.Provider
      value={{
        valueCurrentStep,
        setValueCurrentStep,
        contentInfoStepsArray,
        controlSendForm,
        setControlSendForm,
        altStateMonthYear,
        setAltStateMonthYear,
        yourPlanSelect,
        setYourPlanSelect,
        arrayValuesServices,
        setArrayValuesServices,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}
