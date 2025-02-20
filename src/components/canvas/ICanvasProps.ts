import { Stage } from "konva/lib/Stage";
import { RefObject } from "react";
import Tool from "~/utils/Tool";

export default interface ICanvasProps {
  tool: Tool;
  stageRef: RefObject<Stage>;
}
