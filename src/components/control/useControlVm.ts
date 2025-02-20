import { ChangeEvent } from "react";
import Tool from "~/utils/Tool";
import { SetState } from "~/utils/types/SetState";

type Deps = {
  setTool: SetState<Tool>;
};

export default function useControlVm(deps: Deps) {
  const { setTool } = deps;
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTool(e.target.value as Tool);
  };

  return {
    handleOnChange,
  };
}
