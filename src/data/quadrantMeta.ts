import { Quadrant } from "../types";
import {
  faHeart,
  faGlobe,
  faBriefcase,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const quadrantMeta: Record<
  Quadrant,
  { title: string; icon: any; color: string; insight: string }
> = {
  Passion: {
    title: "Passion",
    icon: faHeart,
    color: "#e63946",
    insight:
      "Where what you love meets what you are good at. Nurture it to keep your motivation and creativity alive.",
  },
  Mission: {
    title: "Mission",
    icon: faGlobe,
    color: "#2a9d8f",
    insight:
      "Where what you love meets what the world needs. This is your higher purpose — the change you want to see.",
  },
  Vocation: {
    title: "Vocation",
    icon: faUserTie,
    color: "#264653",
    insight:
      "Where what the world needs meets what you can be paid for. A path that makes your work meaningful and sustainable.",
  },
  Profession: {
    title: "Profession",
    icon: faBriefcase,
    color: "#457b9d",
    insight:
      "Where what you are good at meets what you can be paid for. It gives stability, but may lack deep personal fulfillment.",
  },
};
