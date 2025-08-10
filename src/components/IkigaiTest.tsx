import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { questions } from "../data/questions";
import { useShuffle } from "../hooks/useShuffle";
import { Question } from "../types";
import QuestionCard from "../components/QuestionCard";
import ProgressHeader from "../components/ProgressHeader";
import ResultsModal from "../components/ResultsModal";
import { calculateScores } from "../utils/calculateScores";
import { interpretResults } from "../utils/interpretResults";
import "./IkigaiTest.css";

const IkigaiTest: React.FC = () => {
  const shuffledQuestions: Question[] = useShuffle(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleAnswer = (value: number) => {
    setResponses((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const scores = calculateScores(responses, shuffledQuestions);
      const maxScorePerQuadrant = Math.max(...Object.values(scores));
      setResultMessage(interpretResults(scores, maxScorePerQuadrant));
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = () => {
    setResponses({});
    setCurrentIndex(0);
    setShowResults(false);
    setResultMessage("");
  };

  return (
    <Container className="py-4 ikigai-container">
      <h1 className="text-center mb-4 text-primary">Discover Your IKIGAI</h1>

      {!showResults ? (
        <div className="test-container">
          <ProgressHeader
            current={currentIndex + 1}
            total={shuffledQuestions.length}
          />
          <QuestionCard
            question={currentQuestion}
            value={responses[currentQuestion.id]}
            onChange={handleAnswer}
            onBack={currentIndex > 0 ? handleBack : undefined}
            onReset={handleReset}
          />
          <div className="mt-3 d-flex justify-content-end">
            <Button
              onClick={handleNext}
              disabled={!responses[currentQuestion.id]}
              variant="primary"
              size="lg"
              className="px-4"
            >
              {currentIndex === shuffledQuestions.length - 1
                ? "See Results"
                : "Next"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="results-container">
          <ResultsModal
            show={showResults}
            onHide={() => setShowResults(false)}
            scores={calculateScores(responses, shuffledQuestions)}
            maxScorePerQuadrant={5 * (shuffledQuestions.length / 4)}
          />
          {resultMessage && (
            <Alert variant="info" className="mt-4">
              <h4 className="alert-heading">Your IKIGAI Insight</h4>
              <p>{resultMessage}</p>
              <hr />
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-primary"
                  onClick={handleReset}
                  size="lg"
                >
                  Take Test Again
                </Button>
              </div>
            </Alert>
          )}
        </div>
      )}
    </Container>
  );
};

export default IkigaiTest;
