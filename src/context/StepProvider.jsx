import { useState } from "react";
import { StepContext } from "./StepContext";

import StepFinish from "../components/StepFinish";
import StepForm from "../components/StepForm";
import StepYourPlan from "../components/StepYourPlan";
import StepServices from "../StepServices";

export default function StepProvider({ children }) {
  const [value, setValue] = useState(0);

  const contentInfoStepsArray = [
    <StepForm />,
    <StepYourPlan />,
    <StepServices />,
    <StepFinish />,
  ];

  return (
    <StepContext.Provider value={{ value, setValue, contentInfoStepsArray }}>
      {children}
    </StepContext.Provider>
  );
}
