import { useEffect, useState } from "react";
import styled from "styled-components";
import useStepContext from "../hook/useStepContext";
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
  const { yourPlanSelect, arrayValuesServices, altStateMonthYear } =
    useStepContext();

  const [totalFinishing, setTotalFinishing] = useState(0);

  useEffect(() => {
    const totalServicesValue = arrayValuesServices.reduce(
      (acc, currentValue) => {
        return acc + parseFloat(currentValue.priceService);
      },
      0
    );

    setTotalFinishing(yourPlanSelect.countValue + totalServicesValue);
  }, []);

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
              <h3>
                {yourPlanSelect.planType} ({yourPlanSelect.planTime})
              </h3>
              <h4>Change</h4>
            </div>
            <span>{yourPlanSelect.planValue}</span>
          </div>

          {arrayValuesServices.map((item, index) => (
            <div key={index} className="customOnlineService infoFlex">
              <h4>{item.nameService}</h4>
              <span>
                +${item.priceService}/{item.monthYear}
              </span>
            </div>
          ))}
        </div>
        <div className="total infoFlex">
          <h4>Total({altStateMonthYear ? "per Month" : "per Year"})</h4>
          <span>+${totalFinishing}/mo</span>
        </div>
      </AllInfoAboutPlan>
    </>
  );
}
