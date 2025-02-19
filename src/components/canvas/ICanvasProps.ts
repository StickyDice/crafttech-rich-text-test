import { Stage } from "konva/lib/Stage";
import { RefObject } from "react";
import Tool from "~/Tool";

export default interface ICanvasProps {
  tool: Tool,
  stageRef: RefObject<Stage> 
}