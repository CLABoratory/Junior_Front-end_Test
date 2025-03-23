import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

type UseCalculatorProps = {
  onCalculate: (algorithm: string, inputValue: number) => void;
};

export const useCalculator = ({ onCalculate }: UseCalculatorProps) => {
  const [algorithm, setAlgorithm] = useState<string>("newton-raphson");
  const [inputValue, setInputValue] = useState<number>(0);

  const handleAlgorithmChange = (event: SelectChangeEvent<unknown>) => {
    setAlgorithm(event.target.value as string);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleCalculate = () => {
    onCalculate(algorithm, inputValue);
  };

  return {
    algorithm,
    inputValue,
    handleAlgorithmChange,
    handleInputChange,
    handleCalculate,
  };
};
