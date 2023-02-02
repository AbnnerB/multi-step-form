import { useState } from "react";
import styled from "styled-components";
import useStepContext from "../hook/useStepContext";
import HeaderStepsInfo from "./HeaderStepsInfo";

const FormStyles = styled.form`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .formLabelAndInput,
  .formLabelAndInputRed {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    color: #0d0c53;
  }

  .labelAndMessage {
    display: flex;
    justify-content: space-between;
  }

  .formLabelAndInput label,
  .formLabelAndInputRed label {
    font-weight: 500;
  }
  .formLabelAndInput input,
  .formLabelAndInputRed input {
    border: 1px solid #cecde7;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #0d0c53;
    font-weight: bold;
    outline: none;
  }

  .formLabelAndInput input:focus {
    border: 1px solid #8d8ccc;
  }

  .formLabelAndInputRed span {
    color: red;
  }
  .formLabelAndInputRed input {
    border-color: red;
  }
`;

export default function StepForm() {
  const {
    nameForm,
    setNameForm,
    emailForm,
    setEmailForm,
    phoneForm,
    setPhoneForm,
    message,
    controlSendForm,
  } = useStepContext();

  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  // if (nameForm.length === 0) {
  //   setMessage("Preencha o campo");
  // }

  return (
    <>
      <HeaderStepsInfo
        title="Personal infos"
        subTitle="Please Provide your name, email adress, and phone number."
      />

      <FormStyles>
        <div
          className={
            nameForm.length === 0 && controlSendForm
              ? "formLabelAndInputRed"
              : "formLabelAndInput"
          }
        >
          <div className="labelAndMessage">
            <label>Name</label>
            {nameForm.length === 0 && controlSendForm && <span>{message}</span>}
          </div>
          <input
            placeholder="Your Name"
            type="text"
            value={nameForm}
            onChange={(e) => setNameForm(e.target.value)}
          />
        </div>
        <div
          className={
            emailForm.length === 0 && controlSendForm
              ? "formLabelAndInputRed"
              : "formLabelAndInput"
          }
        >
          <div className="labelAndMessage">
            <label>Email Address</label>
            {emailForm.length === 0 && controlSendForm && (
              <span>{message}</span>
            )}
          </div>
          <input
            placeholder="yourName@gmail.com"
            type="email"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
          />
        </div>
        <div
          className={
            phoneForm.length === 0 && controlSendForm
              ? "formLabelAndInputRed"
              : "formLabelAndInput"
          }
        >
          <div className="labelAndMessage">
            <label>Phone Number</label>
            {phoneForm.length === 0 && controlSendForm && (
              <span>{message}</span>
            )}
          </div>
          <input
            placeholder="+55 (99) 99999-9999"
            type="tel"
            value={phoneForm}
            // pattern="[0-9]{2}[' '][0-9]{2}[' '][0-9]{5}-[0-9]{4} "
            onChange={(e) => setPhoneForm(e.target.value)}
            required
          />
        </div>
      </FormStyles>
    </>
  );
}
