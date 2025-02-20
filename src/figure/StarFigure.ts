import Konva from "konva";
import { StarConfig } from "konva/lib/shapes/Star";
import { Star } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type StarFigureAttributes = BaseFigureAttributes & {
  numPoints: number;
  innerRadius: number;
  outerRadius: number;
};

export default class StarFigure extends BaseFigure<Konva.Star, StarConfig> {
  Shape = Star;

  numPoints: number;

  innerRadius: number;

  outerRadius: number;

  constructor({
    numPoints,
    innerRadius,
    outerRadius,
    ...props
  }: StarFigureAttributes) {
    super(props);
    this.numPoints = numPoints;
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;
  }
}
