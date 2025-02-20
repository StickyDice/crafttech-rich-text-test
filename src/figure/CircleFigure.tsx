import { Circle } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type CircleFigureAttributes = BaseFigureAttributes;

export default class CircleFigure extends BaseFigure {
  get shape() {
    return (
      <Circle
        radius={Math.abs(this.width)}
        stroke={this.stroke}
        fill={this.fill}
        strokeWidth={this.strokeWidth}
      />
    );
  }
}
