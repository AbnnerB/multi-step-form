import styled from "styled-components";

import StepProvider from "./context/StepProvider";

import SideBar from "./components/SideBar";
import FatherComponent from "./components/FatherComponent";

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: #85bcd530; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 620px) {
    display: block;

    /* flex-direction: column; */
    /* height: 100%; */
  }
`;

const PrincipalContainer = styled.main`
  background-color: white;
  padding: 15px;
  height: 80%;
  width: 65%;
  max-width: 1100px;
  max-height: 600px;

  display: flex;
  border-radius: 10px;
  gap: 6rem;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
  @media screen and (max-width: 840px) {
    gap: 3rem;
    justify-content: space-between;
  }
  @media screen and (max-width: 620px) {
    flex-direction: column;
    width: 100%;
    background-color: transparent;
    padding: 0px;
  }
`;

function App() {
  return (
    <BackgroundContainer>
      <StepProvider>
        <PrincipalContainer>
          <SideBar />
          <FatherComponent />
        </PrincipalContainer>
      </StepProvider>
    </BackgroundContainer>
  );
}

export default App;
