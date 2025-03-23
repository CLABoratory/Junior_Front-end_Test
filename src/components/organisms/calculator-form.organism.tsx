import React, { useState } from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { Button } from '../atoms';
import { AlgorithmSelector, NumberInput } from '../molecules';

interface CalculatorFormProps {
  onCalculate: (algorithm: string, value: number) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [algorithm, setAlgorithm] = useState<string>("newton-raphson");
  const [inputValue, setInputValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleAlgorithmChange = (event: SelectChangeEvent<unknown>) => {
    setAlgorithm(event.target.value as string);
    setError(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setInputValue(value);
    setError(null);
  };

  const handleCalculate = () => {
    try {
      if (inputValue < 0) {
        setError("Please enter a non-negative number");
        return;
      }
      onCalculate(algorithm, inputValue);
    } catch (err) {
      setError(`Calculation error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      console.error('Error during calculation:', err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={8} width="100%">
        <AlgorithmSelector value={algorithm} onChange={handleAlgorithmChange} />
        <NumberInput value={inputValue} onChange={handleInputChange} />
      </Box>
      
      {error && (
        <Box color="error.main" mb={2}>
          {error}
        </Box>
      )}
      
      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate
      </Button>
    </Box>
  );
}; 