import { KonvaEventObject } from "konva/lib/Node";
import { useState } from "react";
import Tool from "~/Tool";

export type Figure = {
  id: string;
  width: number;
  height: number;
  type: "rect";
  x: number;
  y: number;
  html: string;
  text: string;
};

type Deps = {
  tool: Tool;
};

type Position = {
  x: number;
  y: number;
};

export default function useCanvasVm(deps: Deps) {
  const { tool } = deps;
  const [figures, setFigures] = useState<Figure[]>([]);

  const [startPosition, setStartPosition] = useState<Position | undefined>(
    undefined,
  );
  const [isCapturing, setIsCapturing] = useState(false);

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    const point = getCursorCoordinatedFromEvent(tool, e);

    if (!point) return;

    setIsCapturing(true);

    setStartPosition(point);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isCapturing) return;

    const point = getCursorCoordinatedFromEvent(tool, e);

    if (!point) return;

    const width = startPosition!.x - point.x;
    const height = startPosition!.y - point.y;

    setFigures((prev: Figure[]) => [
      ...prev.slice(0, prev.length - 1),
      {
        id: Date.now().toString(36),
        width: width,
        height: height,
        type: "rect",
        x: point.x,
        y: point.y,
        html: "",
        text: "",
      },
    ]);
  };

  const handleMouseUp = (e: KonvaEventObject<MouseEvent>) => {
    if (tool === Tool.CURSOR) return;

    const point = getCursorCoordinatedFromEvent(tool, e);
    if (!point) return;

    const width = startPosition!.x - point.x;
    const height = startPosition!.y - point.y;

    setFigures((prev: Figure[]) => [
      ...prev,
      {
        id: Date.now().toString(36),
        width: width,
        height: height,
        type: "rect",
        x: point.x,
        y: point.y,
        html: "",
        text: "",
      },
    ]);

    setIsCapturing(false);
  };

  return {
    figures,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}

function getCursorCoordinatedFromEvent(
  tool: Tool,
  e: KonvaEventObject<MouseEvent>,
): null | Position {
  if (tool === Tool.CURSOR) return null;

  const stage = e.target.getStage();
  if (!stage) return null;

  const stageOffset = stage.absolutePosition();
  const point = stage.getPointerPosition();
  if (!point) return null;

  return {
    x: point.x - stageOffset.x,
    y: point.y - stageOffset.y,
  };
}
