import IControlProps from "~/components/control/IControlProps";
import useControlVm from "~/components/control/useControlVm";
import Tool from "~/utils/Tool";
import classes from "./control.module.scss";

const Control = ({ tool, setTool }: IControlProps) => {
  const { handleOnChange } = useControlVm({ setTool });

  return (
    <div className={classes.controlContainer}>
      {Object.values(Tool).map((toolType) => (
        <div
          key={toolType}
          className={`${classes.iconContainer} ${tool === toolType ? classes.selected : ""}`}
        >
          <input
            type="radio"
            id={toolType}
            name="control"
            value={toolType}
            checked={tool === toolType}
            onChange={handleOnChange}
            className={classes.hiddenRadio}
          />
          <label htmlFor={toolType}>
            <img
              src={`/${toolType.toLowerCase()}.png`}
              alt={toolType}
              width={20}
              height={20}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Control;
