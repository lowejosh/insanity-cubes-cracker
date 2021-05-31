"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const mockCube = {
    side1: "green",
    side2: "red",
    side3: "green",
    side4: "blue",
    side5: "blue",
    side6: "yellow",
};
// Cube rotation test
mocha_1.describe("rotate", function () {
    it("rotates horizontally", function () {
        const rotatedHorizontallyCube = utils_1.horizRotateCube(mockCube);
        const expectedOutput = {
            side1: "red",
            side2: "green",
            side3: "blue",
            side4: "green",
            side5: "blue",
            side6: "yellow",
        };
        chai_1.expect(rotatedHorizontallyCube).to.deep.equal(expectedOutput);
    });
});
//# sourceMappingURL=utils.test.js.map