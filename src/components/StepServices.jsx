import styled from "styled-components";
import HeaderStepsInfo from "./HeaderStepsInfo";

const ContainerAllServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function StepServices() {
  return (
    <>
      <HeaderStepsInfo
        title="Pick add-ons"
        subTitle="Add ons help your gaming experience"
      />

      <ContainerAllServices>
        <Service
          titService="Online service"
          detailsService="Access to multiplayer game"
          valueService="+$1/mo"
        />
        <Service
          titService="Larger storage"
          detailsService="Extra 1TB of cloud save"
          valueService="+$2/mo"
        />
        <Service
          titService="Customizable Profile"
          detailsService="Custin theme on your profile"
          valueService="+$2/mo"
        />
      </ContainerAllServices>
    </>
  );
}

const ContainerService = styled.button`
  background-color: transparent;
  border: 1px solid #b0aaff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  cursor: auto;
  padding: 1rem;

  .serviceCheckAndInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .serviceCheckAndInfo div {
    text-align: left;
  }
  .serviceCheckAndInfo div h3 {
    color: #09085a;
  }
  .serviceCheckAndInfo div p {
    margin-top: 0.2rem;
    color: gray;
  }
  span {
    color: #9691e2;
    font-weight: bold;
  }
  input {
    cursor: pointer;
  }
`;

function Service({ titService, detailsService, valueService }) {
  return (
    <ContainerService>
      <div className="serviceCheckAndInfo">
        <input type="checkbox" name="" id="" />
        <div>
          <h3>{titService}</h3>
          <p>{detailsService}</p>
        </div>
      </div>
      <span>{valueService}</span>
    </ContainerService>
  );
}
