import { useContext } from "react";
import { StepContext } from "../context/StepContext";

function useStepContext() {
  const context = useContext(StepContext);

  if (context === undefined) {
    throw new Error("não está dentro do contexto");
  }

  return context;
}

export default useStepContext;
