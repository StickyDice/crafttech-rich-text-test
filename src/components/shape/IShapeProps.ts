import { Stage } from "konva/lib/Stage";
import { ReactNode, RefObject } from "react";
import BaseFigure from "~/figure/BaseFigure";
import Tool from "~/utils/Tool";

export default interface IShapeProps {
  stageRef: RefObject<Stage>;
  tool: Tool;
  shape: ReactNode;
  shapeProps: BaseFigure;
}
