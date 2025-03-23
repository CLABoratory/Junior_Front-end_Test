import React from 'react';
import { Box } from '@mui/material';
import { Title } from '../atoms';

interface CalculatorLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({ title, children }) => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      gap={4}
      sx={{
        padding: '0 1rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Title>{title}</Title>
      {children}
    </Box>
  );
}; 