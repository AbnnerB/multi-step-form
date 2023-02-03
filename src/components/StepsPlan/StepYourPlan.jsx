import { useState } from "react";

import ArcadeImg from "../../assets/icon-arcade.svg";
import AdvancedImg from "../../assets/icon-advanced.svg";
import ProImg from "../../assets/icon-pro.svg";

import useStepContext from "../../hook/useStepContext";

import HeaderStepsInfo from "../HeaderStepsInfo";

import {
  ContainerCards,
  Card,
  AltPlan,
  ButtonAlternateType,
} from "./StepPlanStyles";

export default function StepYourPlan() {
  const { yourPlanSelect, setYourPlanSelect } = useStepContext();
  const [altStateMonthYear, setAltStateMonthYear] = useState(true);

  function arcade() {
    setYourPlanSelect({
      planType: "Arcade",
      planValue: altStateMonthYear ? "$9/mo" : "$90/mo",
      planTime: "month",
    });
    console.log(yourPlanSelect.planType);
  }
  function advanced() {
    setYourPlanSelect({
      planType: "Advanced",
      planValue: altStateMonthYear ? "$12/mo" : "$120/mo",
      planTime: "month",
    });
    console.log(yourPlanSelect.planType);
  }
  function pro() {
    setYourPlanSelect({
      planType: "Pro",
      planValue: altStateMonthYear ? "$15/mo" : "$150/mo",
      planTime: "month",
    });
    console.log(yourPlanSelect.planType);
  }

  return (
    <>
      <HeaderStepsInfo
        title="Select your plan"
        subTitle="You have the option of montlhy or yearly billing."
      />

      <ContainerCards>
        <Cards
          onclickk={arcade}
          altStateMonthYear={altStateMonthYear}
          urlImage={ArcadeImg}
          tit="Arcade"
          subTit={altStateMonthYear ? "$9/mo" : "$90/mo"}
        />
        <Cards
          onclickk={advanced}
          altStateMonthYear={altStateMonthYear}
          urlImage={AdvancedImg}
          tit="Advanced"
          subTit={altStateMonthYear ? "$12/mo" : "$120/mo"}
        />
        <Cards
          onclickk={pro}
          altStateMonthYear={altStateMonthYear}
          urlImage={ProImg}
          tit="Pro"
          subTit={altStateMonthYear ? "$15/mo" : "$150/mo"}
        />
      </ContainerCards>
      <AltPlan>
        <div>
          <h3 style={{ color: altStateMonthYear ? "#0d0c53" : "gray" }}>
            Monthly
          </h3>
          <ButtonAlternateType
            onClick={() => setAltStateMonthYear(!altStateMonthYear)}
          >
            <div className={altStateMonthYear ? "month" : "year"}></div>
          </ButtonAlternateType>
          <h3 style={{ color: altStateMonthYear ? "gray" : "#0d0c53" }}>
            Yearly
          </h3>
        </div>
      </AltPlan>
      {`${yourPlanSelect.planType} e  ${yourPlanSelect.planValue} e  ${yourPlanSelect.planTime}`}
    </>
  );
}

function Cards({ urlImage, tit, subTit, altStateMonthYear, onclickk }) {
  return (
    <Card onClick={onclickk}>
      <img src={urlImage} alt="Logo" />
      <div className="infoCard">
        <h3>{tit}</h3>
        <h4>{subTit}</h4>
        <span style={{ visibility: !altStateMonthYear ? "visible" : "hidden" }}>
          2 months free
        </span>
      </div>
    </Card>
  );
}
