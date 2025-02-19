import { useState } from "react";
import { Layer, Stage } from "react-konva";
import Shape from "../shape/Shape";
import ICanvasProps from "~/components/canvas/ICanvasProps";
import { KonvaEventObject } from "konva/lib/Node";
import Tool from "~/Tool";

export interface Figure {
  id: string;
  width: number;
  height: number;
  type: "rect";
  x: number;
  y: number;
  html: string;
  text: string;
}

const Canvas = ({ tool, stageRef }: ICanvasProps) => {
  const [figures, setFigures] = useState<Figure[]>([]);

  const handleOnClick = (e: KonvaEventObject<MouseEvent>) => {
    if (tool === Tool.CURSOR) return;
    const stage = e.target.getStage();
    if (!stage) return;

    const stageOffset = stage.absolutePosition();
    const point = stage.getPointerPosition();
    if (!point) return;

    setFigures((prev: Figure[]) => [
      ...prev,
      {
        id: Date.now().toString(36),
        width: 100,
        height: 100,
        type: "rect",
        x: point.x - stageOffset.x,
        y: point.y - stageOffset.y,
        html: "",
        text: "",
      },
    ]);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={tool === Tool.CURSOR}
      onClick={handleOnClick}
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
