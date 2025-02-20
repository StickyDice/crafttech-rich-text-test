import { BaseFigureAttributes } from "~/figure/BaseFigure";
import EllipseFigure from "~/figure/EllipseFigure";
import { RectFigure } from "~/figure/RectFigure";
import StarFigure from "~/figure/StarFigure";
import Tool from "~/utils/Tool";
import CircleFigure from "../figure/CircleFigure";

export default class FigureGenerator {
  private readonly commonConfig: BaseFigureAttributes = {
    id: Date.now().toString(36),
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    html: "",
    text: "",
    fill: "#fff",
    stroke: "black",
    strokeWidth: 5,
  };

  private figureFromToolType = {
    [Tool.RECT]: () => new RectFigure(this.commonConfig),
    [Tool.CIRCLE]: () => new CircleFigure(this.commonConfig),
    [Tool.ELLIPSE]: () => new EllipseFigure(this.commonConfig),
    [Tool.STAR]: () => new StarFigure({ ...this.commonConfig, numPoints: 5 }),
  };

  generateFigureBasedOnTool(tool: Tool, x: number, y: number) {
    if (tool === Tool.CURSOR) return null;

    const figure = this.figureFromToolType[tool]();
    figure.x = x;
    figure.y = y;

    return figure;
  }
}
