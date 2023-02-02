import { useState } from "react";
import { StepContext } from "./StepContext";

import StepFinish from "../components/StepFinish";
import StepForm from "../components/StepForm";
import StepYourPlan from "../components/StepYourPlan";
import StepServices from "../components/StepServices";
import StepThanks from "../components/StepThanks";

export default function StepProvider({ children }) {
  const [value, setValue] = useState(0);

  const [nameForm, setNameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [phoneForm, setPhoneForm] = useState("");

  const [message, setMessage] = useState("This field is required");

  const [controlSendForm, setControlSendForm] = useState(false);

  const contentInfoStepsArray = [
    <StepForm />,
    <StepYourPlan />,
    <StepServices />,
    <StepFinish />,
    <StepThanks />,
  ];

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
        message,
        setMessage,
        controlSendForm,
        setControlSendForm,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}
