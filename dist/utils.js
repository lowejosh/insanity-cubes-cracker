"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSolution = exports.rotateCubes = exports.onAttempt = exports.vertiRotateCube = exports.horizRotateCube = void 0;
const consts_1 = require("./consts");
const horizRotateCube = (cube) => {
    const newCube = cube;
    newCube.side1 = cube.side2;
    newCube.side2 = cube.side3;
    newCube.side3 = cube.side4;
    newCube.side4 = cube.side1;
    return newCube;
};
exports.horizRotateCube = horizRotateCube;
const vertiRotateCube = (cube) => {
    const newCube = cube;
    newCube.side1 = cube.side5;
    newCube.side6 = cube.side1;
    newCube.side3 = cube.side6;
    newCube.side5 = cube.side3;
    return newCube;
};
exports.vertiRotateCube = vertiRotateCube;
const onAttempt = (solved, cubes, attemptCount) => {
    if (solved) {
        console.log("solved", cubes);
    }
    else {
        console.log("failed attempt: ", attemptCount);
    }
};
exports.onAttempt = onAttempt;
const rotateCubes = (cubeIndex, cubes, attemptCount) => {
    let cube = cubes[cubeIndex];
    consts_1.ROTATION_ORDER.forEach((orderIndex) => {
        attemptCount++;
        // rotate once, updating the cube state
        const rotateFunction = consts_1.ROTATION_ORDER_FUNCTIONS[orderIndex];
        cube = rotateFunction(cube);
        cubes[cubeIndex] = cube;
        // check for solution
        const solved = exports.checkSolution(cubes);
        exports.onAttempt(solved, cubes, attemptCount);
        // rotate the next cubes if we're not the last one
        if (cubeIndex !== cubes.length - 1 && !solved) {
            attemptCount = exports.rotateCubes(cubeIndex + 1, cubes, attemptCount);
        }
    });
    return attemptCount;
};
exports.rotateCubes = rotateCubes;
const checkSolution = (cubes) => consts_1.SIDE_INDEXES_CHECKED.reduce((solvedSides, sideIndex) => {
    const total = cubes.reduce((total, cube) => {
        total += consts_1.COLOR_VALS[cube[sideIndex]];
        return total;
    }, 0);
    if (total === 10) {
        solvedSides++;
    }
    return solvedSides;
}, 0) === 4;
exports.checkSolution = checkSolution;
//# sourceMappingURL=utils.js.map