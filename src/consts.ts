import { horizRotateCube, vertiRotateCube } from "./utils";
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

export const SIDE_INDEXES_CHECKED = ["side1", "side3", "side5", "side6"];

export const ROTATION_ORDER_FUNCTIONS = {
  0: horizRotateCube,
  1: vertiRotateCube,
};

export const ROTATION_ORDER = "0 0 0 1 0 0 0 1 0 0 0 1 0 0 0".split(" ");

export const INITIAL_CUBES: Array<Cube> = [
  {
    side1: "green",
    side2: "red",
    side3: "green",
    side4: "blue",
    side5: "blue",
    side6: "yellow",
  },
  {
    side1: "red",
    side2: "blue",
    side3: "green",
    side4: "yellow",
    side5: "yellow",
    side6: "green",
  },
  {
    side1: "red",
    side2: "yellow",
    side3: "blue",
    side4: "green",
    side5: "red",
    side6: "yellow",
  },
  {
    side1: "blue",
    side2: "red",
    side3: "yellow",
    side4: "green",
    side5: "red",
    side6: "red",
  },
];
