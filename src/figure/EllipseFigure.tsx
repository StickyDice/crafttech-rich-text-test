import { Ellipse } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type EllipseFigureAttributes = BaseFigureAttributes;

export default class EllipseFigure extends BaseFigure {
  get shape() {
    return (
      <Ellipse
        radiusX={Math.abs(this.width)}
        radiusY={this.height}
        fill={this.fill}
        stroke={this.stroke}
        strokeWidth={this.strokeWidth}
      />
    );
  }
}
