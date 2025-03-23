import { Box } from '@mui/material';
import { Button } from '../atoms';
import { AlgorithmSelector, NumberInput } from '../molecules';
import { useCalculator } from '../../hooks/use-calculator.hook';

interface CalculatorFormProps {
    onCalculate: (algorithm: string, value: number) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
    const { algorithm, inputValue, handleAlgorithmChange, handleInputChange, handleCalculate } = useCalculator({ onCalculate });

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={8} width="100%">
                <AlgorithmSelector value={algorithm} onChange={handleAlgorithmChange} />
                <NumberInput value={inputValue} onChange={handleInputChange} />
            </Box>
            <Button variant="contained" color="primary" onClick={handleCalculate}>
                Calculate
            </Button>
        </Box>
    );
}; 