import React from 'react';
import { Box } from '@mui/material';
import { SubTitle, TextField } from '../atoms';

interface NumberInputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
      <SubTitle>Enter a number:</SubTitle>
      <TextField
        type="number"
        value={value}
        onChange={onChange}
        sx={{ width: 200, marginBottom: 2 }}
      />
    </Box>
  );
};
