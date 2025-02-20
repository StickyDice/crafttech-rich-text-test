import { Rect } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type RectFigureAttributes = BaseFigureAttributes;

export class RectFigure extends BaseFigure {
  get shape() {
    return (
      <Rect width={this.width} height={this.height} stroke={this.stroke} />
    );
  }
}
