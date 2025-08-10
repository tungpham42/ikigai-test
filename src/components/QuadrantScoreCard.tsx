import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Quadrant } from "../types";
import { quadrantMeta } from "../data/quadrantMeta";
import "./QuadrantScoreCard.css";

interface Props {
  quadrant: Quadrant;
  score: number;
  maxScore: number;
}

const QuadrantScoreCard: React.FC<Props> = ({ quadrant, score, maxScore }) => {
  const meta = quadrantMeta[quadrant];
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <Card className="quadrant-card shadow-sm h-100">
      <Card.Body className="d-flex align-items-start p-4">
        <div className="icon-container me-4">
          <FontAwesomeIcon icon={meta.icon} size="3x" color={meta.color} />
        </div>
        <div className="flex-grow-1">
          <Card.Title className="h4 mb-2">{meta.title}</Card.Title>
          <Card.Subtitle
            className="text-muted mb-3"
            style={{ fontSize: "0.9rem" }}
          >
            {meta.insight}
          </Card.Subtitle>
          <div className="mb-2">
            <div className="d-flex justify-content-between mb-1">
              <span>Progress:</span>
              <span className="fw-bold">{percentage}%</span>
            </div>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: meta.color,
                }}
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <Card.Text className="mb-0">
            Score: <span className="fw-bold">{score}</span> / {maxScore}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuadrantScoreCard;
