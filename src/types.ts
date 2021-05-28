export type Color = "red" | "green" | "blue" | "yellow";

export type Cube = {
  side1: Color;
  side2: Color;
  side3: Color;
  side4: Color;
  side5: Color;
  side6: Color;
};

export type Cubes = Array<Cube>;
