
type ResultFeedbackProps = {
    result: number;
};

export const ResultFeedback: React.FC<ResultFeedbackProps> = ({ result }) => {
    return <div>{result}</div>;
};

