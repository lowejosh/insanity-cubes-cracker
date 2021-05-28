import { Cube, Cubes } from "./types";
import {
  ROTATION_ORDER_FUNCTIONS,
  SIDE_INDEXES_CHECKED,
  ROTATION_ORDER,
  EXPECTED_TOTAL,
  COLOR_VALS,
} from "./consts";

export const horizRotateCube = (cube: Cube) => {
  const newCube = { ...cube };
  newCube.side1 = cube.side2;
  newCube.side2 = cube.side3;
  newCube.side3 = cube.side4;
  newCube.side4 = cube.side1;
  return newCube;
};

export const vertiRotateCube = (cube: Cube) => {
  const newCube = { ...cube };
  newCube.side1 = cube.side5;
  newCube.side6 = cube.side1;
  newCube.side3 = cube.side6;
  newCube.side5 = cube.side3;
  return newCube;
};

export const onAttempt = (solved: boolean, cubes: Cubes) => {
  if (solved) {
    console.log(solved);
    return cubes;
  }
};

export const rotateCubes = (
  cubeIndex: number,
  cubes: Cubes,
  attemptCount: number,
  solutionCallback: (solution: Cubes) => void
) => {
  let cube = cubes[cubeIndex];

  ROTATION_ORDER.forEach((orderIndex) => {
    attemptCount++;

    // rotate once, updating the cube state
    const rotateFunction = ROTATION_ORDER_FUNCTIONS[orderIndex];
    cube = rotateFunction(cube);
    cubes[cubeIndex] = cube;

    // check for solution
    const solved = checkSolution(cubes);
    const solution = onAttempt(solved, cubes);
    if (solution) {
      solutionCallback(solution);
    }

    // rotate the next cubes if we're not the last one
    if (cubeIndex !== cubes.length - 1) {
      attemptCount = rotateCubes(
        cubeIndex + 1,
        cubes,
        attemptCount,
        solutionCallback
      );
    }
  });
  console.log(attemptCount);

  return attemptCount;
};

export const checkSolution = (cubes: Cubes) =>
  SIDE_INDEXES_CHECKED.reduce<number>((solvedSides, sideIndex) => {
    const total = cubes.reduce<number>((total, cube) => {
      total += COLOR_VALS[cube[sideIndex]];
      return total;
    }, 0);

    if (total === EXPECTED_TOTAL) {
      solvedSides++;
    }

    return solvedSides;
  }, 0) === 4;
