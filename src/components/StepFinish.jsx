import styled from "styled-components";
import HeaderStepsInfo from "./HeaderStepsInfo";

const AllInfoAboutPlan = styled.div`
  display: flex;
  flex-direction: column;

  .info {
    padding: 0.5rem 1rem;
    background-color: #dbe3f3a0;
    border-radius: 8px;
  }
  .infoFlex {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .customArcade {
    border-bottom: 1px solid #75757447;
  }

  .customArcade h3 {
    color: #040544;
    font-weight: 500;
    font-size: 1.1rem;
  }
  .customArcade span {
    font-weight: bold;
    color: #0f1186;
  }

  h4 {
    color: gray;
    font-weight: 400;
  }

  .total {
    padding: 1rem;
  }
  .total span {
    color: #6b3add;
    font-weight: bold;
  }
`;

export default function StepFinish() {
  return (
    <>
      <HeaderStepsInfo
        title="Finishing up"
        subTitle="Double-check everything look OK before confirming."
      />

      <AllInfoAboutPlan>
        <div className="info">
          <div className="customArcade infoFlex">
            <div>
              <h3>Arcade (Monthly)</h3>
              <h4>Change</h4>
            </div>
            <span>$9/mo</span>
          </div>

          <div className="customOnlineService infoFlex">
            <h4>Online service</h4>
            <span>+$1/mo</span>
          </div>

          <div className="customStorage infoFlex">
            <h4>Larger storage</h4>
            <span>+$2/mo</span>
          </div>
        </div>
        <div className="total infoFlex">
          <h4>Total(per Month)</h4>
          <span>+$12/mo</span>
        </div>
      </AllInfoAboutPlan>
    </>
  );
}
