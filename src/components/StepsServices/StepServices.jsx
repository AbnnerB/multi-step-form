import { useEffect, useRef, useState } from "react";
import HeaderStepsInfo from "../HeaderStepsInfo";

import { ContainerAllServices, ContainerService } from "./StepServiceStyle";

//a ideia de alterar os input não funcionou
//vou ver o que eu faço agr

export default function StepServices() {
  return (
    <>
      <HeaderStepsInfo
        title="Pick add-ons"
        subTitle="Add ons help your gaming experience"
      />

      <ContainerAllServices>
        {/* <Service
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
        /> */}

        <ContainerService>
          <div className="serviceCheckAndInfo">
            <input
              type="checkbox"
              value="+$2/mo"
              onClick={(e) => addServiceInArray(e)}
              onChange={() => setValueInputChecked(!valueInputChecked)}
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
              value="+$2/mo"
              onClick={(e) => addServiceInArray(e)}
              onChange={() => setValueInputChecked(!valueInputChecked)}
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
              value="+$2/mo"
              onClick={(e) => addServiceInArray(e)}
              onChange={() => setValueInputChecked(!valueInputChecked)}
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

//pensando em criar uma função de controle de input eu altero os inputs com click
//ou altero somente a função, fazendo com que receba de inicioa funcao de addicionar
//depois função de excluir ao ser clicado
function Service({ titService, detailsService, valueService }) {
  const valueInput = useRef();
  const [valueInputChecked, setValueInputChecked] = useState(false);

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

  function alert() {
    alert("aaaaaaaaaaaaa ");
  }

  return (
    <ContainerService>
      <div className="serviceCheckAndInfo">
        <input
          type="checkbox"
          value={valueService}
          onClick={(e) => addServiceInArray(e)}
          onChange={() => setValueInputChecked(!valueInputChecked)}
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
