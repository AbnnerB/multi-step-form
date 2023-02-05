import { useState } from "react";
import { StepContext } from "./StepContext";

import StepFinish from "../components/StepFinish";
import StepForm from "../components/StepsForm/StepForm";
import StepYourPlan from "../components/StepsPlan/StepYourPlan";
import StepServices from "../components/StepsServices/StepServices";
import StepThanks from "../components/StepThanks";

export default function StepProvider({ children }) {
  const [value, setValue] = useState(0);

  const [nameForm, setNameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [phoneForm, setPhoneForm] = useState("");

  const [controlSendForm, setControlSendForm] = useState(false);

  const contentInfoStepsArray = [
    <StepForm />,
    <StepYourPlan />,
    <StepServices />,
    <StepFinish />,
    <StepThanks />,
  ];

  const [yourPlanSelect, setYourPlanSelect] = useState({
    planType: "Arcade",
    planValue: "$9/mo",
    planTime: "Monthly",
  });

  const [arrayValuesServices, setArrayValuesServices] = useState([]);

  return (
    <StepContext.Provider
      value={{
        value,
        setValue,
        contentInfoStepsArray,
        nameForm,
        setNameForm,
        emailForm,
        setEmailForm,
        phoneForm,
        setPhoneForm,
        controlSendForm,
        setControlSendForm,
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
