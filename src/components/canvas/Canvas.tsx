import { Layer, Stage } from "react-konva";
import Shape from "../shape/Shape";
import ICanvasProps from "~/components/canvas/ICanvasProps";
import Tool from "~/utils/Tool";
import useCanvasVm from "~/components/canvas/useCanvasVm";

const Canvas = ({ tool, stageRef }: ICanvasProps) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp, figures } =
    useCanvasVm({ tool });

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
        {figures.map((figure, i: number) => {
          return (
            <Shape
              key={i}
              shapeProps={figure}
              stageRef={stageRef}
              tool={tool}
              shape={figure.shape}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
