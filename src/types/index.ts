export type Quadrant = "Passion" | "Mission" | "Vocation" | "Profession";

export interface Question {
  id: string;
  text: string;
  quadrant: Quadrant;
}
