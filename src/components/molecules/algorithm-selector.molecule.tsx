import React from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { SubTitle, Select, MenuItem } from '../atoms';

interface AlgorithmSelectorProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
}

export const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({ value, onChange }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
      <SubTitle>Choose an algorithm:</SubTitle>
      <Select
        value={value}
        onChange={onChange}
        sx={{ width: 200, marginBottom: 2 }}
      >
        <MenuItem value="newton-raphson">Newton-Raphson</MenuItem>
      </Select>
    </Box>
  );
};
