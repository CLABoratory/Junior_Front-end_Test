import { CalculatorForm } from "../organisms";
import { CalculatorLayout } from "../templates";

export const HomePage = () => {

    return (
        <CalculatorLayout title="Square Root Calculator">
            <CalculatorForm onCalculate={() => { }} />
        </CalculatorLayout>
    );
};
