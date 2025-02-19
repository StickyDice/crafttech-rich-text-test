import { ChangeEvent } from "react";
import IControlProps from "~/components/control/IControlProps";
import Tool from "~/Tool";

const Control = ({ tool, setTool }: IControlProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTool(e.target.value as Tool);
  };

  return (
    <div style={{ position: "absolute", top: 0 }}>
      <div>
        <input
          type="radio"
          id="cursor"
          name="control"
          value={Tool.CURSOR}
          checked={tool === Tool.CURSOR}
          onChange={handleOnChange}
        />
        <label htmlFor="cursor">Взаимодействие</label>
      </div>

      <div>
        <input
          type="radio"
          id="shape"
          name="control"
          value={Tool.SHAPE}
          checked={tool === Tool.SHAPE}
          onChange={handleOnChange}
        />
        <label htmlFor="shape">Добавление</label>
      </div>
    </div>
  );
};

export default Control;
