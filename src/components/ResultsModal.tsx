import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { Quadrant } from "../types";
import QuadrantScoreCard from "./QuadrantScoreCard";
import "./ResultsModal.css";

interface Props {
  show: boolean;
  onHide: () => void;
  scores: Record<Quadrant, number>;
  maxScorePerQuadrant: number;
}

const ResultsModal: React.FC<Props> = ({
  show,
  onHide,
  scores,
  maxScorePerQuadrant,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="results-modal"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="w-100 text-center">
          <h2 className="text-primary">Your IKIGAI Results</h2>
          <p className="text-muted">Discover your purpose and passion</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Row>
          {Object.entries(scores).map(([quadrant, score]) => (
            <Col key={quadrant} md={6} className="mb-3">
              <QuadrantScoreCard
                quadrant={quadrant as Quadrant}
                score={score}
                maxScore={maxScorePerQuadrant}
              />
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="primary" onClick={onHide} size="lg" className="px-4">
          Explore Your Results
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsModal;
