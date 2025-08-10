import { useMemo } from "react";
import { shuffleArray } from "../utils/shuffleArray";

export function useShuffle<T>(items: T[]): T[] {
  return useMemo(() => shuffleArray(items), [items]);
}
