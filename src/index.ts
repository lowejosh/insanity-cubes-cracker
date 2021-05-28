import { INITIAL_CUBES } from "./consts";
import { rotateCubes } from "./utils";
/**
 * basic probably unoptimized algorithm (assuming four cubes):
 *
 * the correct solution has all sides number mapped values summing to 10
 *
 * so... just brute force through every possible combination until we have all sides mapped to 10
 *
 * a cube rotation iteration can be defined as rotating a cube through every side, starting with the intial state:
 *      1: rotate 90 degrees sideways three times,
 *      2: rotate 90 degrees upwards once,
 *      3: repeat step 1
 *      4: repeat steps 2 and 3 two more times
 *
 * a cube rotation iteration will be done initially on the first cube, and if no solution is found, it will be done on the next cube,
 * rotating the previous cube completely for every individual rotation of the cube before that. This cascades towards the last cube until all
 * possible states are checked. There should only be 16^4 solutions so this should be fine without optimization.
 */

const attemptSolution = () => {
  let attemptCount = 0;

  rotateCubes(0, INITIAL_CUBES, attemptCount);
};

attemptSolution();