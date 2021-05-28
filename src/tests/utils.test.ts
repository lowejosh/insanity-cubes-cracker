import { Cube } from "../types";
import { INITIAL_CUBES } from "./../consts";
import { describe } from "mocha";
import { expect } from "chai";
import { horizRotateCube } from "../utils";

const mockCube: Cube = {
  side1: "green",
  side2: "red",
  side3: "green",
  side4: "blue",
  side5: "blue",
  side6: "yellow",
};

// Cube rotation test
describe("rotate", function () {
  it("rotates horizontally", function () {
    const rotatedHorizontallyCube = horizRotateCube(mockCube);
    const expectedOutput: Cube = {
      side1: "red",
      side2: "green",
      side3: "blue",
      side4: "green",
      side5: "blue",
      side6: "yellow",
    };
    expect(rotatedHorizontallyCube).to.deep.equal(expectedOutput);
  });
});
