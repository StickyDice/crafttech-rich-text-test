import Konva from "konva";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { Circle } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type CircleFigureAttributes = BaseFigureAttributes & {
  radius: number;
};

export default class CircleFigure extends BaseFigure<
  Konva.Circle,
  CircleConfig
> {
  Shape = Circle;

  radius: number;

  constructor({ radius, ...props }: CircleFigureAttributes) {
    super(props);
    this.radius = radius;
  }
}
