import { Cube } from "./types";

export const COLOR_VALS = {
  red: 1,
  green: 2,
  blue: 5,
  yellow: 7,
};

export const EXPECTED_TOTAL = Object.keys(COLOR_VALS).reduce(
  (sum, key) => sum + parseFloat(COLOR_VALS[key] || 0),
  0
);

export const SIDE_INDEXES_CHECKED = ["front", "back", "top", "bottom"];

export const ROTATION_ORDER = "0 0 0 1 0 0 0 1 0 0 0 1 0 0 0".split(" ");

export const INITIAL_CUBES: Array<Cube> = [
  {
    front: "green",
    right: "red",
    back: "green",
    left: "blue",
    top: "blue",
    bottom: "yellow",
  },
  {
    front: "red",
    right: "blue",
    back: "green",
    left: "yellow",
    top: "yellow",
    bottom: "green",
  },
  {
    front: "red",
    right: "yellow",
    back: "blue",
    left: "green",
    top: "red",
    bottom: "yellow",
  },
  {
    front: "blue",
    right: "red",
    back: "yellow",
    left: "green",
    top: "red",
    bottom: "red",
  },
];
