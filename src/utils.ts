import { Cube, Cubes } from "./types";
import {
  SIDE_INDEXES_CHECKED,
  ROTATION_ORDER,
  EXPECTED_TOTAL,
  COLOR_VALS,
} from "./consts";

export const horizRotateCube = (cube: Cube) => {
  const newCube = { ...cube };
  newCube.front = cube.right;
  newCube.right = cube.back;
  newCube.back = cube.left;
  newCube.left = cube.front;
  return newCube;
};

export const vertiRotateCube = (cube: Cube) => {
  const newCube = { ...cube };
  newCube.front = cube.top;
  newCube.bottom = cube.front;
  newCube.back = cube.bottom;
  newCube.top = cube.back;
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
    `Place cube ${cubeNumber} with ${cube.front} facing you, ${cube.back} opposite to that, with ${cube.top} on top and ${cube.bottom} on the bottom`
  );
