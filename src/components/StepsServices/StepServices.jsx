import { useEffect, useRef, useState } from "react";
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
  const valueInput = useRef();
  // const [valueInputChecked, setValueInputChecked] = useState(true);

  // const objService = {
  //   nameService: titService,
  //   priceService: valueService,
  //   valueInput: valueInputChecked,
  // };

  // console.log(objService);

  // const [arrayValues, setArrayValues] = useState([]);

  // useEffect(() => {
  //   if (valueInputChecked === true) {
  //     setArrayValues([...arrayValues, objService]);
  //   }
  //   // setArrayValues(objService);

  //   // const filtered = arrayValues.filter((item) => item.valueInput === true);
  //   // setArrayValues(filtered);

  //   console.log(arrayValues);
  // }, [valueInputChecked]);

  const [arrayValues, setArrayValues] = useState([]);

  function addServiceInArray(e) {
    const objService = {
      nameService: titService,
      priceService: valueService,
      valueInput: e.target.checked,
    };

    // if (e.target.checked === true) {
    //   setArrayValues([...arrayValues, objService]);
    // }
    // console.log(arrayValues);

    if (objService.valueInput === true) {
      setArrayValues([...arrayValues, objService]);
    }
    console.log(arrayValues);

    // console.log(objService);
  }

  return (
    <ContainerService>
      <div className="serviceCheckAndInfo">
        <input
          type="checkbox"
          value={valueService}
          onClick={(e) => addServiceInArray(e)}
        />
        <div>
          <h3>{titService}</h3>
          <p>{detailsService}</p>
        </div>
      </div>
      <span>{valueService}</span>
      {arrayValues.map((item, index) => (
        <h1 key={index}>{titService}</h1>
      ))}
    </ContainerService>
  );
}
