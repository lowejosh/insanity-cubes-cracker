import { horizRotateCube } from "../utils";
import { describe } from "mocha";
import { Cube } from "../types";
import { expect } from "chai";

const mockCube: Cube = {
  front: "green",
  right: "red",
  back: "green",
  left: "blue",
  top: "blue",
  bottom: "yellow",
};

// Cube rotation test
describe("rotate", function () {
  it("rotates horizontally", function () {
    const rotatedHorizontallyCube = horizRotateCube(mockCube);
    const expectedOutput: Cube = {
      front: "red",
      right: "green",
      back: "blue",
      left: "green",
      top: "blue",
      bottom: "yellow",
    };
    expect(rotatedHorizontallyCube).to.deep.equal(expectedOutput);
  });
});
