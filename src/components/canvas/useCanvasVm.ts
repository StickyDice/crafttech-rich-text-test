import { KonvaEventObject } from "konva/lib/Node";
import { useRef, useState } from "react";
import BaseFigure from "~/figure/BaseFigure";
import FigureGenerator from "~/utils/figureGenerator";
import Tool from "~/utils/Tool";

type Deps = {
  tool: Tool;
};

type Position = {
  x: number;
  y: number;
};

export default function useCanvasVm(deps: Deps) {
  const { tool } = deps;
  const [figures, setFigures] = useState<BaseFigure[]>([]);

  const figureGenerator = useRef(new FigureGenerator());

  const [startPosition, setStartPosition] = useState<Position | undefined>(
    undefined,
  );
  const [isCapturing, setIsCapturing] = useState(false);

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    const point = getCursorCoordinatedFromEvent(tool, e);

    if (!point) return;
    const figure = figureGenerator.current.generateFigureBasedOnTool(
      tool,
      point.x,
      point.y,
    );

    if (!figure) return;

    setFigures((prev) => [...prev, figure]);

    setIsCapturing(true);

    setStartPosition(point);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isCapturing || !startPosition) return;

    const point = getCursorCoordinatedFromEvent(tool, e);

    if (!point) return;

    const width = startPosition.x - point.x;
    const height = startPosition.y - point.y;

    setFigures((prev) => {
      const figure = figureGenerator.current.generateFigureBasedOnTool(
        tool,
        startPosition.x,
        startPosition.y,
      );
      if (!figure) return prev;

      figure.width = -width;
      figure.height = -height;
      return [...prev.slice(0, prev.length - 1), figure];
    });
  };

  const handleMouseUp = () => {
    setIsCapturing(false);
    setStartPosition(undefined);
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
    x: Math.abs(point.x - stageOffset.x),
    y: Math.abs(point.y - stageOffset.y),
  };
}
