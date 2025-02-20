import Konva from "konva";
import { WedgeConfig } from "konva/lib/shapes/Wedge";
import { Wedge } from "react-konva";
import BaseFigure, { BaseFigureAttributes } from "~/figure/BaseFigure";

export type WedgeFigureAttributes = BaseFigureAttributes & {
  radius: number;
  angle: number;
  rotation: number;
};

export default class WedgeFigure extends BaseFigure<Konva.Wedge, WedgeConfig> {
  Shape = Wedge;

  radius: number;
  angle: number;
  rotation: number;

  constructor({ radius, angle, rotation, ...props }: WedgeFigureAttributes) {
    super(props);
    this.radius = radius;
    this.angle = angle;
    this.rotation = rotation;
  }
}
