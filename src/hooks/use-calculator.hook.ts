import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

type UseCalculatorProps = {
  onCalculate: (algorithm: string, inputValue: number) => void;
};

export const useCalculator = ({ onCalculate }: UseCalculatorProps) => {
  const [algorithm, setAlgorithm] = useState<string>("newton-raphson");
  const [inputValue, setInputValue] = useState<number>(0);

  const handleAlgorithmChange = (event: SelectChangeEvent<unknown>) => {
    throw new Error("Not implemented");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    throw new Error("Not implemented");
  };

  const handleCalculate = () => {
    throw new Error("Not implemented");
  };

  return {
    algorithm,
    inputValue,
    handleAlgorithmChange,
    handleInputChange,
    handleCalculate,
  };
};
