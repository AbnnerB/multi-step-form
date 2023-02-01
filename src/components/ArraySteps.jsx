import useStepContext from "../hook/useStepContext";

export default function ArraySteps() {
  const { value, contentInfoStepsArray } = useStepContext();

  return <div>{contentInfoStepsArray[value]}</div>;
}
