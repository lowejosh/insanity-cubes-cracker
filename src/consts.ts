import { Cube } from "./types";
import { horizRotateCube, vertiRotateCube } from "./utils";

export const COLOR_VALS = {
  red: 1,
  green: 2,
  blue: 3,
  yellow: 4,
};

export const SIDE_INDEXES_CHECKED = ["side1", "side3", "side5", "side6"];

export const ROTATION_ORDER_FUNCTIONS = {
  0: horizRotateCube,
  1: vertiRotateCube,
};

export const ROTATION_ORDER = "0 0 0 1 0 0 0 1 0 0 0 1 0 0 0".split(" ");

export const INITIAL_CUBES: Array<Cube> = [
  {
    side1: "red",
    side2: "yellow",
    side3: "green",
    side4: "blue",
    side5: "red",
    side6: "yellow",
  },
  {
    side1: "red",
    side2: "yellow",
    side3: "green",
    side4: "blue",
    side5: "red",
    side6: "yellow",
  },
  {
    side1: "red",
    side2: "yellow",
    side3: "green",
    side4: "blue",
    side5: "red",
    side6: "yellow",
  },
  {
    side1: "red",
    side2: "yellow",
    side3: "green",
    side4: "blue",
    side5: "red",
    side6: "yellow",
  },
];
