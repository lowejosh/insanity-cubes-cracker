"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_CUBES = exports.ROTATION_ORDER = exports.SIDE_INDEXES_CHECKED = exports.EXPECTED_TOTAL = exports.COLOR_VALS = void 0;
exports.COLOR_VALS = {
    red: 1,
    green: 2,
    blue: 5,
    yellow: 7,
};
exports.EXPECTED_TOTAL = Object.keys(exports.COLOR_VALS).reduce((sum, key) => sum + parseFloat(exports.COLOR_VALS[key] || 0), 0);
exports.SIDE_INDEXES_CHECKED = ["side1", "side3", "side5", "side6"];
exports.ROTATION_ORDER = "0 0 0 1 0 0 0 1 0 0 0 1 0 0 0".split(" ");
exports.INITIAL_CUBES = [
    {
        side1: "green",
        side2: "red",
        side3: "green",
        side4: "blue",
        side5: "blue",
        side6: "yellow",
    },
    {
        side1: "red",
        side2: "blue",
        side3: "green",
        side4: "yellow",
        side5: "yellow",
        side6: "green",
    },
    {
        side1: "red",
        side2: "yellow",
        side3: "blue",
        side4: "green",
        side5: "red",
        side6: "yellow",
    },
    {
        side1: "blue",
        side2: "red",
        side3: "yellow",
        side4: "green",
        side5: "red",
        side6: "red",
    },
];
//# sourceMappingURL=consts.js.map