import Konva from "konva";
import { Group } from "react-konva";
import { Html } from "react-konva-utils";
import HtmlText from "../htmlText/HtmlText";
import { Image } from "konva/lib/shapes/Image";
import IShapeProps from "~/components/shape/IShapeProps";
import useShapeVm from "~/components/shape/useShapeVm";
import { useRef } from "react";
import TextEditor from "~/components/TextEditor/TextEditor";
import classes from "./shape.module.scss";
import Tool from "~/utils/Tool";

const Shape = (props: IShapeProps) => {
  const { shape, shapeProps, tool } = props;

  const groupRef = useRef<Konva.Group | null>(null);
  const imageRef = useRef<Image | null>(null);
  const htmlRef = useRef<HTMLDivElement>(null);

  const { handleClick, handleInput, isEditing, value } = useShapeVm({
    ...props,
    groupRef,
    imageRef,
    htmlRef,
  });

  return (
    <>
      <Group
        x={shapeProps.x}
        y={shapeProps.y}
        onClick={handleClick}
        ref={groupRef}
        draggable={tool === Tool.CURSOR}
      >
        {shape}
        {isEditing && (
          <Html>
            <div className={classes.textEditorContainer}>
              <TextEditor value={value} handleChange={handleInput} />
            </div>
          </Html>
        )}
      </Group>
      <Html>
        <HtmlText ref={htmlRef} html={shapeProps.html} id={shapeProps.id} />
      </Html>
    </>
  );
};

export default Shape;
