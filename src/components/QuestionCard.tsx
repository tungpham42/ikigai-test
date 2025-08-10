import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Question } from "../types";
import "./QuestionCard.css";

interface Props {
  question: Question;
  value?: number;
  onChange: (value: number) => void;
  onBack?: () => void;
  onReset?: () => void;
}

const QuestionCard: React.FC<Props> = ({
  question,
  value,
  onChange,
  onBack,
  onReset,
}) => {
  const options = [1, 2, 3, 4, 5];

  return (
    <Card className="mb-3 question-card shadow-sm">
      <Card.Body className="p-4">
        <Card.Text className="h5 mb-4">{question.text}</Card.Text>
        <Form className="d-flex justify-content-center mb-4">
          {options.map((option) => (
            <div key={option} className="mx-2 text-center">
              <Form.Check
                type="radio"
                name={question.id}
                id={`${question.id}-${option}`}
                label={option.toString()}
                checked={value === option}
                onChange={() => onChange(option)}
                className="custom-radio"
              />
              {option === 1 && <div className="small-text">Disagree</div>}
              {option === 5 && <div className="small-text">Agree</div>}
            </div>
          ))}
        </Form>
        <div className="d-flex justify-content-start gap-3 mt-3">
          {onReset && (
            <Button variant="outline-danger" onClick={onReset}>
              ↻ Reset
            </Button>
          )}
          {onBack && (
            <Button variant="outline-secondary" onClick={onBack}>
              ← Back
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
