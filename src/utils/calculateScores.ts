import { Quadrant, Question } from "../types";

export function calculateScores(
  responses: Record<string, number>,
  questions: Question[]
): Record<Quadrant, number> {
  const scores: Record<Quadrant, number> = {
    Passion: 0,
    Mission: 0,
    Vocation: 0,
    Profession: 0,
  };

  for (const q of questions) {
    const responseValue = responses[q.id] || 0;
    scores[q.quadrant] += responseValue;
  }

  return scores;
}
