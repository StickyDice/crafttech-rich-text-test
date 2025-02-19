import { Stage } from "konva/lib/Stage";
import { RefObject } from "react";
import { Figure } from "~/components/canvas/Canvas";
import Tool from "~/Tool";

export default interface IShapeProps extends Figure {
  stageRef: RefObject<Stage>,
  tool: Tool
}