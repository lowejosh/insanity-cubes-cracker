"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printReadableCube = exports.printSolution = exports.checkSolution = exports.rotateCubes = exports.onAttempt = exports.vertiRotateCube = exports.horizRotateCube = void 0;
const consts_1 = require("./consts");
const horizRotateCube = (cube) => {
    const newCube = Object.assign({}, cube);
    newCube.side1 = cube.side2;
    newCube.side2 = cube.side3;
    newCube.side3 = cube.side4;
    newCube.side4 = cube.side1;
    return newCube;
};
exports.horizRotateCube = horizRotateCube;
const vertiRotateCube = (cube) => {
    const newCube = Object.assign({}, cube);
    newCube.side1 = cube.side5;
    newCube.side6 = cube.side1;
    newCube.side3 = cube.side6;
    newCube.side5 = cube.side3;
    return newCube;
};
exports.vertiRotateCube = vertiRotateCube;
const onAttempt = (solved, cubes) => {
    if (solved) {
        return cubes;
    }
};
exports.onAttempt = onAttempt;
const rotateCubes = (cubeIndex, cubes, attemptCount, solutionCallback) => {
    consts_1.ROTATION_ORDER.forEach((orderIndex) => {
        attemptCount++;
        // rotate once, updating the cube state
        const rotateFunction = consts_1.ROTATION_ORDER_FUNCTIONS[orderIndex];
        cubes[cubeIndex] = rotateFunction(cubes[cubeIndex]);
        // check for solution
        const solved = exports.checkSolution(cubes);
        const solution = exports.onAttempt(solved, cubes);
        // rotate the next cubes if we're not the last one
        if (cubeIndex !== cubes.length - 1) {
            attemptCount = exports.rotateCubes(cubeIndex + 1, cubes, attemptCount, solutionCallback);
        }
        if (solution) {
            solutionCallback(solution, attemptCount);
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
    if (total === consts_1.EXPECTED_TOTAL) {
        solvedSides++;
    }
    return solvedSides;
}, 0) === 4;
exports.checkSolution = checkSolution;
const printSolution = (solution) => solution.forEach((cube, index) => exports.printReadableCube(cube, index + 1));
exports.printSolution = printSolution;
const printReadableCube = (cube, cubeNumber) => console.log(`Place cube ${cubeNumber} with ${cube.side1} facing you, ${cube.side3} opposite to that, with ${cube.side5} on top and ${cube.side6} on the bottom`);
exports.printReadableCube = printReadableCube;
//# sourceMappingURL=utils.js.map