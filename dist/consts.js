"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_CUBES = exports.ROTATION_ORDER = exports.ROTATION_ORDER_FUNCTIONS = exports.SIDE_INDEXES_CHECKED = exports.COLOR_VALS = void 0;
const utils_1 = require("./utils");
exports.COLOR_VALS = {
    red: 1,
    green: 2,
    blue: 3,
    yellow: 4,
};
exports.SIDE_INDEXES_CHECKED = ["side1", "side3", "side5", "side6"];
exports.ROTATION_ORDER_FUNCTIONS = {
    0: utils_1.horizRotateCube,
    1: utils_1.vertiRotateCube,
};
exports.ROTATION_ORDER = "0 0 0 1 0 0 0 1 0 0 0 1 0 0 0".split(" ");
exports.INITIAL_CUBES = [
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
//# sourceMappingURL=consts.js.map