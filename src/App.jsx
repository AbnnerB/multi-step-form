import styled from "styled-components";

import StepProvider from "./context/StepProvider";

import ArraySteps from "./components/ArraySteps";
import SideBar from "./components/SideBar";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #85bcd530;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrincipalContainer = styled.main`
  background-color: white;
  padding: 15px;
  height: 80%;
  width: 65%;
  max-width: 900px;
  max-height: 600px;

  display: flex;
  border-radius: 10px;
  gap: 6rem;
`;

function App() {
  return (
    <BackgroundContainer>
      <StepProvider>
        <PrincipalContainer>
          <SideBar />
          <ArraySteps />
        </PrincipalContainer>
      </StepProvider>
    </BackgroundContainer>
  );
}

export default App;
