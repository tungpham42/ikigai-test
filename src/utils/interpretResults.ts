import { Quadrant } from "../types";

export function interpretResults(
  scores: Record<Quadrant, number>,
  maxScorePerQuadrant: number
): string {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topQuadrant, topScore] = sorted[0];
  const percentage = Math.round((topScore / maxScorePerQuadrant) * 100);

  if (percentage > 80) {
    return `Your strongest area is ${topQuadrant}, which you excel in with ${percentage}%. This is likely a core part of your Ikigai.`;
  } else if (percentage > 60) {
    return `You have a strong leaning towards ${topQuadrant} at ${percentage}%. This could be a significant focus for finding your Ikigai.`;
  } else {
    return `Your results are balanced, with ${topQuadrant} slightly ahead at ${percentage}%. Your Ikigai might lie in combining multiple areas.`;
  }
}
