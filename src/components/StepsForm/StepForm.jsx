import { useEffect, useState } from "react";

import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useStepContext from "../../hook/useStepContext";

import HeaderStepsInfo from "../HeaderStepsInfo";

import { FormStyles } from "./StepFormStyles";

const schema = yup
  .object({
    nameForm: yup.string().required("This field is required"),
    emailForm: yup
      .string()
      .email("Enter a valid email address")
      .required("This field is required"),
    phoneForm: yup.string().required("This field is required"),
  })
  .required();

export default function StepForm() {
  const { value, setValue } = useStepContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [lastCharacterPhoneNumber, setLastCharacterPhoneNumber] = useState("_");
  const getPhoneForm = watch("phoneForm") || "";

  useEffect(() => {
    const lastCharacterInStringPhoneForm = getPhoneForm.slice(-1);
    setLastCharacterPhoneNumber(lastCharacterInStringPhoneForm);
  }, [getPhoneForm]);

  function submit() {
    if (lastCharacterPhoneNumber === "_") {
      return;
    }

    setValue(value + 1);
  }

  return (
    <>
      <HeaderStepsInfo
        title="Personal infos"
        subTitle="Please Provide your name, email adress, and phone number."
      />

      <FormStyles onSubmit={handleSubmit(submit)}>
        <div className="formLabelAndInput">
          <div className="labelAndMessage">
            <label htmlFor="naMeForm">Name</label>
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
            <label htmlFor="eMailForm">Email Address</label>
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
            <label htmlFor="pHoneNumber">Phone Number</label>

            <span style={{ color: "red" }}>{errors.phoneForm?.message}</span>
            {lastCharacterPhoneNumber === "_" && (
              <span style={{ color: "red" }}>Fill in all the field</span>
            )}
          </div>
          <InputMask
            mask="(99) 99999-9999"
            placeholder=" (99) 99999-9999"
            {...register("phoneForm", { required: true })}
            id="pHoneNumber"
          />
        </div>

        <div className="buttonNexStepFake">
          <button type="submit">Next Step</button>
        </div>
      </FormStyles>
    </>
  );
}
