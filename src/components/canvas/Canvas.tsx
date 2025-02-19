import { Layer, Stage } from "react-konva";
import Shape from "../shape/Shape";
import ICanvasProps from "~/components/canvas/ICanvasProps";
import Tool from "~/Tool";
import useCanvasVm, { Figure } from "~/components/canvas/useCanvasVm";

const Canvas = ({ tool, stageRef }: ICanvasProps) => {
  
  const {handleMouseDown, handleMouseMove, handleMouseUp, figures} = useCanvasVm({tool})

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={tool === Tool.CURSOR}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={stageRef}
    >
      <Layer>
        {figures.map((figure: Figure, i: number) => {
          return <Shape key={i} {...figure} stageRef={stageRef} tool={tool} />;
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
