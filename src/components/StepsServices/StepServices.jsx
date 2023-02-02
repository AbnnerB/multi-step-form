import HeaderStepsInfo from "../HeaderStepsInfo";

import { ContainerAllServices, ContainerService } from "./StepServiceStyle";

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
