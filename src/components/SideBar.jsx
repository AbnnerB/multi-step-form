import styled from "styled-components";

import BgsideBar from "../assets/bg-sidebar-desktop.svg";
import BgsideBarMobile from "../assets/bg-sidebar-mobile.svg";
import useStepContext from "../hook/useStepContext";

const SideBarStyles = styled.section`
  background-image: url(${BgsideBar});
  background-size: cover;
  background-position: bottom center;
  padding-left: 1.5rem;
  padding-right: 1rem;
  border-radius: 8px;
  width: 45%;
  max-width: 230px;

  .containerInfoSideBarSteps {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    color: white;
  }

  .sideBarInfoSteps {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .sideBarInfoSteps span {
    border: 0.13rem solid white;
    color: white;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .backgroundFill {
    background-color: white;
    color: #0f1e75 !important;
    font-weight: bold;
    border-color: #0f1e75;
  }

  .sideBarInfoSteps h4 {
    color: #a8a3a3;
    font-weight: 400;
  }
  .sideBarInfoSteps h3 {
    font-size: 1rem;
  }

  @media screen and (max-width: 760px) {
    .sideBarInfoSteps {
      flex-direction: column;
      align-items: center;
    }
    .sideBarInfoSteps div {
      text-align: center;
    }
  }
  @media screen and (max-width: 620px) {
    min-width: 100%;
    border-radius: 0px;
    background-image: url(${BgsideBarMobile});
    background-position: top;

    .containerInfoSideBarSteps {
      padding-top: 1rem;
      height: 180px;
      flex-direction: row;
      justify-content: center;
    }
    .infoSideBarDetailsSteps {
      display: none;
    }
  }
`;

export default function SideBar() {
  const { valueCurrentStep, setValueCurrentStep } = useStepContext();

  return (
    <SideBarStyles>
      <div className="containerInfoSideBarSteps">
        <div className="sideBarInfoSteps">
          <span className={valueCurrentStep === 0 ? "backgroundFill" : ""}>
            1
          </span>
          <div className="infoSideBarDetailsSteps">
            <h4>STEP 1</h4>
            <h3>YOUR INFO</h3>
          </div>
        </div>
        <div className="sideBarInfoSteps">
          <span className={valueCurrentStep === 1 ? "backgroundFill" : ""}>
            2
          </span>
          <div className="infoSideBarDetailsSteps">
            <h4>STEP 2</h4>
            <h3>SELECT PLAN</h3>
          </div>
        </div>
        <div className="sideBarInfoSteps">
          <span className={valueCurrentStep === 2 ? "backgroundFill" : ""}>
            3
          </span>
          <div className="infoSideBarDetailsSteps">
            <h4>STEP 3</h4>
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div className="sideBarInfoSteps">
          <span className={valueCurrentStep >= 3 ? "backgroundFill" : ""}>
            4
          </span>
          <div className="infoSideBarDetailsSteps">
            <h4>STEP 4</h4>
            <h3>SUMMARY</h3>
          </div>
        </div>
      </div>
    </SideBarStyles>
  );
}
