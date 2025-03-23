import { CalculatorForm } from "../organisms";
import { CalculatorLayout } from "../templates";

export const HomePage: React.FC = () => {
    return (
        <CalculatorLayout title="Square Root Calculator">
            <CalculatorForm onCalculate={() => { }} />
        </CalculatorLayout>
    );
};
