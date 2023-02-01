import styled from "styled-components";
import HeaderStepsInfo from "./HeaderStepsInfo";

const FormStyles = styled.form`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .formLabelAndInput {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    color: #0d0c53;
  }
  .formLabelAndInput label {
    font-weight: 500;
  }
  .formLabelAndInput input {
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
`;

export default function StepForm() {
  return (
    <>
      <HeaderStepsInfo
        title="Personal info"
        subTitle="Please Provide your name, email adress, and phone number."
      />

      <FormStyles>
        <div className="formLabelAndInput">
          <label>Name</label>
          <input placeholder="Aaaaaaa" type="text" required />
        </div>
        <div className="formLabelAndInput">
          <label>Email Address</label>
          <input placeholder="aaaaaaaaaaa@gmail.com" type="email" required />
        </div>
        <div className="formLabelAndInput">
          <label>Phone Number</label>
          <input placeholder="+55 (99) 99999-9999" type="tel" required />
        </div>
      </FormStyles>
    </>
  );
}
