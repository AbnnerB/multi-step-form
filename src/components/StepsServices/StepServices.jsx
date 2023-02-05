import { useEffect, useRef, useState } from "react";
import useStepContext from "../../hook/useStepContext";
import HeaderStepsInfo from "../HeaderStepsInfo";

import { ContainerAllServices, ContainerService } from "./StepServiceStyle";

export default function StepServices() {
  const { arrayValuesServices, setArrayValuesServices } = useStepContext();

  useEffect(() => {
    setArrayValuesServices([]);
  }, []);

  function addServiceOnlineInArray(e) {
    const objService = {
      nameService: e.target.name,
      priceService: e.target.value,
      valueInput: e.target.checked,
      verification: e.target.id,
    };

    if (e.target.checked) {
      setArrayValuesServices([...arrayValuesServices, objService]);
    }
    if (!e.target.checked) {
      let filtered = arrayValuesServices.filter(
        (item) => item.verification !== e.target.id
      );
      setArrayValuesServices(filtered);
    }
  }

  return (
    <>
      <HeaderStepsInfo
        title="Pick add-ons"
        subTitle="Add ons help your gaming experience"
      />

      <ContainerAllServices>
        <ContainerService>
          <div className="serviceCheckAndInfo">
            <input
              type="checkbox"
              name="Online Service"
              value="+$1/mo"
              onClick={(e) => addServiceOnlineInArray(e)}
              id="1"
            />

            <div>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <span>+$1/mo</span>
        </ContainerService>
        <ContainerService>
          <div className="serviceCheckAndInfo">
            <input
              type="checkbox"
              name="Larger Storage"
              value="+$2/mo"
              onClick={(e) => addServiceOnlineInArray(e)}
              id="2"
            />

            <div>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <span>+$2/mo</span>
        </ContainerService>
        <ContainerService>
          <div className="serviceCheckAndInfo">
            <input
              type="checkbox"
              name="Customizable Profile"
              value="+$2/mo"
              onClick={(e) => addServiceOnlineInArray(e)}
              id="3"
            />

            <div>
              <h3>Customizable Profile</h3>
              <p>Custin theme on your profile</p>
            </div>
          </div>
          <span>+$2/mo</span>
        </ContainerService>
      </ContainerAllServices>
    </>
  );
}
