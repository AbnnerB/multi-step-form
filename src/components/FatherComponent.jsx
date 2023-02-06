import { useEffect } from "react";
import styled from "styled-components";
import useStepContext from "../hook/useStepContext";

const FatherContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;

  .content {
    width: 90%;
    height: 100%;
  }

  .barNavigation {
    display: flex;
    justify-content: space-between;
    width: 90%;
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
  const { valueCurrentStep, setValueCurrentStep, contentInfoStepsArray } =
    useStepContext();

  function nextStep() {
    setValueCurrentStep(valueCurrentStep + 1);
  }

  function goBack() {
    setValueCurrentStep(valueCurrentStep - 1);
  }

  return (
    <FatherContainer>
      <div className="content">{contentInfoStepsArray[valueCurrentStep]}</div>

      {valueCurrentStep !== contentInfoStepsArray.length - 1 && (
        <div className="barNavigation">
          {valueCurrentStep !== 0 && (
            <>
              <button
                style={{
                  visibility: valueCurrentStep === 0 ? "hidden" : "visible",
                }}
                onClick={goBack}
              >
                Go Back
              </button>

              <button onClick={nextStep}>
                {valueCurrentStep !== 3 ? "Next Step" : "Confirm"}
              </button>
            </>
          )}
        </div>
      )}
    </FatherContainer>
  );
}
