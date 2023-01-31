import styled from "styled-components";

import BgsideBar from "../assets/bg-sidebar-desktop.svg";

const SideBarStyles = styled.section`
  background-image: url(${BgsideBar});
  background-size: cover;
  background-position: bottom center;
  padding-left: 1.5rem;
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
    gap: 1rem;
    cursor: pointer;
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
  .sideBarInfoSteps h4 {
    color: #a8a3a3;
    font-weight: 400;
  }
  .sideBarInfoSteps h3 {
    font-size: 1rem;
  }
`;

export default function SideBar() {
  return (
    <SideBarStyles>
      <div className="containerInfoSideBarSteps">
        <div className="sideBarInfoSteps">
          <span>1</span>
          <div>
            <h4>STEP 1</h4>
            <h3>YOUR INFO</h3>
          </div>
        </div>
        <div className="sideBarInfoSteps">
          <span>2</span>
          <div>
            <h4>STEP 2</h4>
            <h3>SELECT PLAN</h3>
          </div>
        </div>
        <div className="sideBarInfoSteps">
          <span>3</span>
          <div>
            <h4>STEP 3</h4>
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div className="sideBarInfoSteps">
          <span>4</span>
          <div>
            <h4>STEP 4</h4>
            <h3>SUMMARY</h3>
          </div>
        </div>
      </div>
    </SideBarStyles>
  );
}
