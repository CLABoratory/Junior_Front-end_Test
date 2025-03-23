import { Box } from '@mui/material';
import { Button } from '../atoms';
import { AlgorithmSelector, NumberInput } from '../molecules';

interface CalculatorFormProps {
    onCalculate: (algorithm: string, value: number) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={8} width="100%">
                <AlgorithmSelector value={'abcde'} onChange={() => { }} />
                <NumberInput value={0} onChange={() => { }} />
            </Box>
            <Button variant="contained" color="primary" onClick={() => { }}>
                Calculate
            </Button>
        </Box>
    );
}; 