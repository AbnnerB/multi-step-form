import styled from "styled-components";

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
  width: 70%;

  display: flex;
  border-radius: 10px;
  gap: 4rem;
`;

function App() {
  return (
    <BackgroundContainer>
      <PrincipalContainer>
        <SideBar />
        <section>Content</section>
      </PrincipalContainer>
    </BackgroundContainer>
  );
}

export default App;
