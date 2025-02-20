import IControlProps from "~/components/control/IControlProps";
import useControlVm from "~/components/control/useControlVm";
import Tool from "~/Tool";
import classes from "./control.module.scss";

const Control = ({ tool, setTool }: IControlProps) => {
  const { handleOnChange } = useControlVm({ setTool });

  return (
    <div className={classes.controlContainer}>
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

      <div>
        <select defaultValue="rect" disabled={tool !== Tool.SHAPE}>
          <option value="rect">rect</option>
          <option value="circle">circle</option>
          <option value="ellipse">ellipse</option>
          <option value="wedge">wedge</option>
          <option value="start">start</option>
        </select>
      </div>
    </div>
  );
};

export default Control;
