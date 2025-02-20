import Tool from "~/utils/Tool";
import { SetState } from "~/utils/types/SetState";

export default interface IControlProps {
  tool: Tool;
  setTool: SetState<Tool>;
}
