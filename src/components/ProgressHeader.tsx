import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./ProgressHeader.css";

interface Props {
  current: number;
  total: number;
}

const ProgressHeader: React.FC<Props> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="mb-4 progress-container">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">
          Question <span className="fw-bold">{current}</span> of {total}
        </h5>
        <span className="badge bg-primary rounded-pill">
          {percentage}% Complete
        </span>
      </div>
      <ProgressBar
        now={percentage}
        animated
        striped
        variant="primary"
        className="progress-bar-custom"
      />
    </div>
  );
};

export default ProgressHeader;
