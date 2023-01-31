import styled from "styled-components";
import FatherComponent from "./FatherComponent";

import ArcadeImg from "../assets/icon-arcade.svg";
import AdvancedImg from "../assets/icon-advanced.svg";
import ProImg from "../assets/icon-pro.svg";
import { useState } from "react";

const ContainerCards = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.button`
  background-color: transparent;
  padding: 1rem 2rem 1rem 0.5rem;
  border: 1px solid gray;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: calc(100% / 3 - 14px);

  &:focus,
  &:hover {
    border: 1px solid #6843ad;
  }

  .infoCard {
    text-align: left;
  }
`;

const AltPlan = styled.div`
  width: 80%;
  margin-top: 1.5rem;
  background-color: #acace43b;
  padding: 1rem 0;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const ButtonAlternateType = styled.button`
  padding: 0.4rem 1.8rem;
  height: 30px;
  border-radius: 30px;
  background-color: #8282b9;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  outline: none;

  div {
    width: 20px;
    height: 20px;
    background-color: white;
    color: white;
    border-radius: 50%;
  }
  .month {
    position: absolute;
    left: 5px;
    animation: moveMonth 1s;
  }
  @keyframes moveMonth {
    0% {
      left: 30px;
    }
    100% {
      left: 5px;
    }
  }

  .year {
    position: absolute;
    right: 5px;
    animation: moveYear 1s;
  }
  @keyframes moveYear {
    0% {
      right: 30px;
    }
    100% {
      right: 5px;
    }
  }
`;

export default function StepYourPlan() {
  const [altStateMonthYear, setAltStateMonthYear] = useState(true);

  return (
    <FatherComponent
      title="Select your plan"
      subTitle="You have the option of montlhy or yearly billing."
    >
      <ContainerCards>
        <Cards urlImage={ArcadeImg} tit="Arcade" subTit="$/mo" />
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
    </FatherComponent>
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
