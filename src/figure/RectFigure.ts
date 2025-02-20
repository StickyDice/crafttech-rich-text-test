import Konva from "konva";
import { RectConfig } from "konva/lib/shapes/Rect";
import { Rect } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type RectFigureAttributes = BaseFigureAttributes & {
  width: number;
};

export class RectFigure extends BaseFigure<Konva.Rect, RectConfig> {
  Shape = Rect;

  width: number;

  constructor({ width, ...props }: RectFigureAttributes) {
    super(props);
    this.width = width;
  }
}
