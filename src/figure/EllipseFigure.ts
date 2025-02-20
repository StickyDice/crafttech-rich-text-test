import Konva from "konva";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { Ellipse } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type EllipseFigureAttributes = BaseFigureAttributes & {
  radiusX: number;
  radiusY: number;
};

export default class EllipseFigure extends BaseFigure<
  Konva.Ellipse,
  EllipseConfig
> {
  Shape = Ellipse;

  radiusX: number;

  radiusY: number;

  constructor({ radiusX, radiusY, ...props }: EllipseFigureAttributes) {
    super(props);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
  }
}
