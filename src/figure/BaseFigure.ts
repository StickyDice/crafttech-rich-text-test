import { ReactNode } from "react";

export type BaseFigureAttributes = Omit<BaseFigure, "shape">;

export default abstract class BaseFigure {
  abstract get shape(): ReactNode;

  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  html: string;
  text: string;

  constructor({
    id,
    x,
    y,
    fill,
    stroke,
    strokeWidth,
    html,
    text,
    width,
    height,
  }: BaseFigureAttributes) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
    this.html = html;
    this.text = text;
    this.width = width;
    this.height = height;
  }
}
