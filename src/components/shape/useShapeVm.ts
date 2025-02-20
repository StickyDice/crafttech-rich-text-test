import html2canvas from "html2canvas";
import Konva from "konva";
import { Image } from "konva/lib/shapes/Image";
import { MutableRefObject, RefObject, useState } from "react";
import IShapeProps from "~/components/shape/IShapeProps";
import Tool from "~/Tool";

type Deps = IShapeProps & {
  groupRef: RefObject<Konva.Group | null>;
  imageRef: MutableRefObject<Image | null>;
};

export default function useShapeVm(deps: Deps) {
  const { groupRef, imageRef, id, height, tool, width } = deps;
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const renderImage = async () => {
    const htmltext = document.getElementById(`htmltext_${id}`);

    if (!htmltext) return;

    htmltext.innerHTML = value;

    const canvas = await html2canvas(htmltext, {
      backgroundColor: "rgba(0,0,0,0)",
      useCORS: true,
    });

    const shape = new Konva.Image({
      x: width / 2 - canvas.width / 2,
      y: height / 2 - canvas.height / 2,
      scaleX: 1 / window.devicePixelRatio,
      scaleY: 1 / window.devicePixelRatio,
      image: canvas,
    });
    groupRef.current?.add(shape);
    if (imageRef.current) {
      imageRef.current.destroy();
    }

    imageRef.current = shape;
  };

  const handleClick = () => {
    if (tool === Tool.SHAPE) {
      return;
    }
    setIsEditing((prev) => {
      const newEditingState = !prev;

      if (!newEditingState) {
        renderImage();
      }

      return newEditingState;
    });

    if (imageRef.current) {
      imageRef.current.opacity(isEditing ? 1 : 0);
    }
  };

  const handleInput = (value: string) => {
    setValue(value);
  };

  return {
    handleClick,
    handleInput,
    isEditing,
    value,
  };
}
