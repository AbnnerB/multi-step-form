import { useEffect, useRef, useState } from "react";
import useStepContext from "../../hook/useStepContext";
import HeaderStepsInfo from "../HeaderStepsInfo";

import { ContainerAllServices, ContainerService } from "./StepServiceStyle";

//a ideia de alterar os input não funcionou
//vou ver o que eu faço agr

export default function StepServices() {
  const { arrayValuesServices, setArrayValuesServices } = useStepContext();

  function addServiceOnlineInArray(e) {
    const objService = {
      nameService: e.target.name,
      priceService: e.target.value,
      valueInput: e.target.checked,
      verification: e.target.id,
    };

    if (e.target.checked === true) {
      setArrayValuesServices([...arrayValuesServices, objService]);
    }
    if (e.target.checked === false) {
      let filtered = arrayValuesServices.filter(
        (item) => item.verification !== e.target.id
      );
      setArrayValuesServices(filtered);
    }

    // if (arrayValuesServices.length <= 0) {
    //   return;
    // }

    // if (e.target.name === arrayValuesServices.nameService) {
    //   alert("aa");
    //   return;
    // }

    console.log(arrayValuesServices);
  }
  // function addServiceLargerInArray(e) {
  //   const objService = {
  //     nameService: e.target.name,
  //     priceService: e.target.value,
  //     valueInput: e.target.checked,
  //   };

  //   console.log(objService);
  // }
  // function addServiceCustomizableInArray(e) {
  //   const objService = {
  //     nameService: e.target.name,
  //     priceService: e.target.value,
  //     valueInput: e.target.checked,
  //   };

  //   console.log(objService);
  // }
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
          onClickk="online"
        />
        <Service
          titService="Larger storage"
          detailsService="Extra 1TB of cloud save"
          valueService="+$2/mo"
          onClickk="larger"
        />
        <Service
          titService="Customizable Profile"
          detailsService="Custin theme on your profile"
          valueService="+$2/mo"
          onClickk="customizable"
        /> */}

        <ContainerService>
          <div className="serviceCheckAndInfo">
            <input
              type="checkbox"
              name="Online Service"
              value="+$1/mo"
              onClick={(e) => addServiceOnlineInArray(e)}
              id="1"
              // onChange={() => setValueInputChecked(!valueInputChecked)}
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

              // onChange={() => setValueInputChecked(!valueInputChecked)}
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
              name="CustomizableProfile"
              value="+$2/mo"
              onClick={(e) => addServiceOnlineInArray(e)}
              id="3"

              //  onChange={() => setValueInputChecked(!valueInputChecked)}
            />

            <div>
              <h3>Customizable Profile</h3>
              <p>Custin theme on your profile</p>
            </div>
          </div>
          <span>+$2/mo</span>
        </ContainerService>

        {arrayValuesServices.map((item) => (
          <div key={item.nameService}>
            <p>{item.nameService}</p>
          </div>
        ))}
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

  const { arrayValuesServices, setArrayValuesServices } = useStepContext();

  // function addServiceInArray(e) {
  //   const objService = {
  //     nameService: titService,
  //     priceService: valueService,
  //     valueInput: e.target.checked,
  //   };

  //   setArrayValuesServices(objService);

  //   // if (e.target.checked === true) {
  //   //   setArrayValues([...arrayValues, objService]);
  //   // }
  //   // console.log(arrayValues);

  //   // if (e.target.checked === true) {
  //   //   setArrayValuesServices([...arrayValuesServices, objService]);
  //   // } else if (objService.valueInput === false) {
  //   //   let filtered = arrayValuesServices.filter(
  //   //     (item) => item.nameService !== e.target.value
  //   //   );
  //   //   setArrayValuesServices(filtered);
  //   // }

  //   // console.log(arrayValuesServices);

  //   console.log(objService);
  // }

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
          // onChange={() => setValueInputChecked(!valueInputChecked)}
        />

        <div>
          <h3>{titService}</h3>
          <p>{detailsService}</p>
        </div>
      </div>
      <span>{valueService}</span>
      {/* {arrayValuesServices.map((item, index) => (
        <h1 key={index}>{item.nameService}</h1>
      ))} */}
    </ContainerService>
  );
}
