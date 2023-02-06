import { useEffect, useState } from "react";

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
  const { yourPlanSelect, altStateMonthYear, setAltStateMonthYear } =
    useStepContext();

  return (
    <>
      <HeaderStepsInfo
        title="Select your plan"
        subTitle="You have the option of montlhy or yearly billing."
      />

      <ContainerCards>
        <Cards
          altStateMonthYear={altStateMonthYear}
          urlImage={ArcadeImg}
          tit="Arcade"
          nameType={yourPlanSelect.planType}
          subTit={altStateMonthYear ? "$9/mo" : "$90/yr"}
          valueForCount={altStateMonthYear ? 9 : 90}
        />
        <Cards
          altStateMonthYear={altStateMonthYear}
          urlImage={AdvancedImg}
          tit="Advanced"
          nameType={yourPlanSelect.planType}
          subTit={altStateMonthYear ? "$12/mo" : "$120/yr"}
          valueForCount={altStateMonthYear ? 12 : 120}
        />
        <Cards
          altStateMonthYear={altStateMonthYear}
          urlImage={ProImg}
          tit="Pro"
          nameType={yourPlanSelect.planType}
          subTit={altStateMonthYear ? "$15/mo" : "$150/yr"}
          valueForCount={altStateMonthYear ? 15 : 150}
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
    </>
  );
}

function Cards({
  urlImage,
  tit,
  subTit,
  altStateMonthYear,
  nameType,
  valueForCount,
}) {
  const { yourPlanSelect, setYourPlanSelect } = useStepContext();

  useEffect(() => {
    if (yourPlanSelect.planType === "Arcade") {
      setYourPlanSelect({
        planType: "Arcade",
        planValue: altStateMonthYear ? "$9/mo" : "$90/yr",
        planTime: altStateMonthYear ? "Monthly" : "Yearly",
        countValue: altStateMonthYear ? 9 : 90,
      });
    } else if (yourPlanSelect.planType === "Advanced") {
      setYourPlanSelect({
        planType: "Advanced",
        planValue: altStateMonthYear ? "$12/mo" : "$120/yr",
        planTime: altStateMonthYear ? "Monthly" : "Yearly",
        countValue: altStateMonthYear ? 12 : 120,
      });
    } else if (yourPlanSelect.planType === "Pro") {
      setYourPlanSelect({
        planType: tit,
        planValue: altStateMonthYear ? "$15/mo" : "$150/yr",
        planTime: altStateMonthYear ? "Monthly" : "Yearly",
        countValue: altStateMonthYear ? 15 : 150,
      });
    }
  }, [altStateMonthYear]);

  function changePlanValue() {
    setYourPlanSelect({
      planType: tit,
      planValue: subTit,
      planTime: altStateMonthYear ? "Monthly" : "Yearly",
      countValue: valueForCount,
    });
  }

  return (
    <Card
      style={{
        backgroundColor: tit === nameType ? "#c4cae422" : "white",
        borderColor: tit === nameType ? "#6843ad" : "",
      }}
      onClick={changePlanValue}
    >
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
