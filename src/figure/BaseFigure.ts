import { Shape, ShapeConfig } from "konva/lib/Shape";
import { KonvaNodeComponent } from "react-konva";

export type BaseFigureAttributes = Omit<
  BaseFigure<Shape, ShapeConfig>,
  "Shape"
>;

export default abstract class BaseFigure<
  SHAPE extends Shape,
  SHAPE_CONFIG extends ShapeConfig,
> {
  abstract Shape: KonvaNodeComponent<SHAPE, SHAPE_CONFIG>;

  x: number;
  y: number;
  fill: string;
  stroke: string;
  strokeWidth: string;

  constructor({ x, y, fill, stroke, strokeWidth }: BaseFigureAttributes) {
    this.x = x;
    this.y = y;
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
  }
}
