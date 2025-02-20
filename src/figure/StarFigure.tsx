import { Star } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type StarFigureAttributes = BaseFigureAttributes & {
  numPoints: number;
};

export default class StarFigure extends BaseFigure {
  get shape() {
    return (
      <Star
        numPoints={this.numPoints}
        innerRadius={this.width / 3}
        outerRadius={this.width}
        fill={this.fill}
        stroke={this.stroke}
        strokeWidth={this.strokeWidth}
      />
    );
  }

  numPoints: number;

  constructor({ numPoints, ...props }: StarFigureAttributes) {
    super(props);
    this.numPoints = numPoints;
  }
}
