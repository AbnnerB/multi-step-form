import { useState } from "react";
import styled from "styled-components";

import ArcadeImg from "../../assets/icon-arcade.svg";
import AdvancedImg from "../../assets/icon-advanced.svg";
import ProImg from "../../assets/icon-pro.svg";

import HeaderStepsInfo from "../HeaderStepsInfo";

import {
  ContainerCards,
  Card,
  AltPlan,
  ButtonAlternateType,
} from "./StepPlanStyles";

export default function StepYourPlan() {
  const [altStateMonthYear, setAltStateMonthYear] = useState(true);

  return (
    <>
      <HeaderStepsInfo
        title="Select your plan"
        subTitle="You have the option of montlhy or yearly billing."
      />

      <ContainerCards>
        <Cards urlImage={ArcadeImg} tit="Arcade" subTit="$8/mo" />
        <Cards urlImage={AdvancedImg} tit="Advanced" subTit="$12/mo" />
        <Cards urlImage={ProImg} tit="Pro" subTit="$15/mo" />
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

function Cards({ urlImage, tit, subTit }) {
  return (
    <Card>
      <img src={urlImage} alt="Logo" />
      <div className="infoCard">
        <h3>{tit}</h3>
        <h4>{subTit}</h4>
      </div>
    </Card>
  );
}
