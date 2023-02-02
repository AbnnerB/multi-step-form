import { useState } from "react";
import styled from "styled-components";
import useStepContext from "../hook/useStepContext";
import HeaderStepsInfo from "./HeaderStepsInfo";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  .buttonNexStepFake {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .buttonNexStepFake button {
    position: absolute;
    bottom: -87px;
    right: 0px;
    background-color: #201f55;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 0.8rem 1rem;
  }
`;

const schema = yup
  .object({
    nameForm: yup.string().required("This field is required"),
    emailForm: yup
      .string()
      .email("Enter a valid email address")
      .required("This field is required"),
    phoneForm: yup
      .string("this is not a valid number")
      .required("This field is required"),
    // age: yup.number().positive().integer().required(),
  })
  .required();

export default function StepForm() {
  const {
    nameForm,
    setNameForm,
    emailForm,
    setEmailForm,
    phoneForm,
    setPhoneForm,
    value,
    setValue,
  } = useStepContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submit(userData) {
    console.log(userData);
    // setValue(value + 1);
  }
  console.log(errors);

  return (
    <>
      <HeaderStepsInfo
        title="Personal infos"
        subTitle="Please Provide your name, email adress, and phone number."
      />

      <FormStyles onSubmit={handleSubmit(submit)}>
        <div className="formLabelAndInput">
          <div className="labelAndMessage">
            <label for="naMeForm">Name</label>
            <span style={{ color: "red" }}>{errors.nameForm?.message}</span>
          </div>
          <input
            placeholder="Your Name"
            type="text"
            {...register("nameForm", { required: true })}
            maxLength="30"
            id="naMeForm"
          />
        </div>
        <div className="formLabelAndInput">
          <div className="labelAndMessage">
            <label for="eMailForm">Email Address</label>
            <span style={{ color: "red" }}>{errors.emailForm?.message}</span>
          </div>
          <input
            placeholder="yourName@gmail.com"
            type="text"
            {...register("emailForm", { required: true })}
            id="eMailForm"
          />
        </div>

        <div className="formLabelAndInput">
          <div className="labelAndMessage">
            <label for="pHoneNumber">Phone Number</label>
            <span style={{ color: "red" }}>{errors.phoneForm?.message}</span>
          </div>
          <input
            placeholder="+55 (99) 99999-9999"
            type="tel"
            {...register("phoneForm", { required: true })}
            mask="99.99999-9999"
            maxLength="19"
            id="pHoneNumber"
          />
          {/* <input
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          /> */}

          <input
            type="text"
            class="form-control phone-mask"
            placeholder="Ex.: 0000-0000"
          ></input>
        </div>

        <div className="buttonNexStepFake">
          <button type="submit">Next Step</button>
        </div>
      </FormStyles>
    </>
  );
}
