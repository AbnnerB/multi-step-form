import styled from "styled-components";
import useStepContext from "../hook/useStepContext";

const FatherContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;

  /* .content {
    margin-top: 2.5rem;
  } */

  .barNavigation {
    display: flex;
    justify-content: space-between;
    min-width: 80%;
  }

  .barNavigation button:first-of-type {
    border: none;
    background-color: transparent;
    color: #a8a6a6;
    font-weight: bold;
  }

  .barNavigation button:last-of-type {
    background-color: #201f55;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 0.8rem 1rem;
  }
`;

export default function FatherComponent() {
  const { value, setValue, contentInfoStepsArray } = useStepContext();

  function nextStep() {
    if (value >= contentInfoStepsArray.length - 1) {
      return;
    }
    // setValue((preventStep) => preventStep + 1);
    setValue(value + 1);
  }

  function goBack() {
    if (value === 0) {
      return;
    }
    // setValue((preventStep) => preventStep + 1);
    setValue(value - 1);
  }

  return (
    <FatherContainer>
      <div className="content">{contentInfoStepsArray[value]}</div>

      <div className="barNavigation">
        <button onClick={goBack}>Go Back</button>
        <button onClick={nextStep}>Next Step</button>
      </div>
    </FatherContainer>
  );
}
