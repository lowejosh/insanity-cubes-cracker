import { Cube, Cubes } from "./types";
import {
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

export const rotateCubes = (
  cubeIndex: number,
  cubes: Cubes,
  attemptCount: number,
  solutionCallback: (solution: Cubes, attemptCount: number) => void
) => {
  ROTATION_ORDER.forEach((orderIndex) => {
    attemptCount++;

    // rotate once, updating the cube state
    const rotateFunction = [horizRotateCube, vertiRotateCube][orderIndex];
    cubes[cubeIndex] = rotateFunction(cubes[cubeIndex]);

    // check for solution
    const solved = checkSolution(cubes);

    // rotate the next cubes if we're not the last one
    if (cubeIndex !== cubes.length - 1) {
      attemptCount = rotateCubes(
        cubeIndex + 1,
        cubes,
        attemptCount,
        solutionCallback
      );
    }

    if (solved) {
      solutionCallback(cubes, attemptCount);
    }
  });

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

export const printSolution = (solution: Cubes) =>
  solution.forEach((cube, index) => printReadableCube(cube, index + 1));

export const printReadableCube = (cube: Cube, cubeNumber: number) =>
  console.log(
    `Place cube ${cubeNumber} with ${cube.side1} facing you, ${cube.side3} opposite to that, with ${cube.side5} on top and ${cube.side6} on the bottom`
  );
