export type Color = "red" | "green" | "blue" | "yellow";

export type Cube = {
  front: Color;
  right: Color;
  back: Color;
  left: Color;
  top: Color;
  bottom: Color;
};

export type Cubes = Array<Cube>;
