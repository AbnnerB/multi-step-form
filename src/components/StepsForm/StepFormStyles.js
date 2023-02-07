import styled from "styled-components";

export const FormStyles = styled.form`
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
  }
  .buttonNexStepFake button {
    margin-top: 3.8rem;
    background-color: #201f55;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 0.8rem 1rem;
  }

  @media screen and (max-width: 620px) {
    .buttonNexStepFake {
      margin: 0px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background-color: white;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1rem;
    }

    .buttonNexStepFake button {
      margin: 0px;
    }
  }
`;
