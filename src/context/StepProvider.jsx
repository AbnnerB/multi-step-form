import { useState } from "react";
import { StepContext } from "./StepContext";

import StepFinish from "../components/StepFinish";
import StepForm from "../components/StepForm";
import StepYourPlan from "../components/StepYourPlan";
import StepServices from "../components/StepServices";
import StepThanks from "../components/StepThanks";

export default function StepProvider({ children }) {
  const [value, setValue] = useState(0);

  const contentInfoStepsArray = [
    <StepForm />,
    <StepYourPlan />,
    <StepServices />,
    <StepFinish />,
    <StepThanks />,
  ];

  return (
    <StepContext.Provider value={{ value, setValue, contentInfoStepsArray }}>
      {children}
    </StepContext.Provider>
  );
}
