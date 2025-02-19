import Konva from "konva";
import { Group, Rect } from "react-konva";
import { Html } from "react-konva-utils";
import HtmlText from "../htmlText/HtmlText";
import { Image } from "konva/lib/shapes/Image";
import IShapeProps from "~/components/shape/IShapeProps";
import useShapeVm from "~/components/shape/useShapeVm";
import { useRef } from "react";
import TextEditor from "~/components/TextEditor/TextEditor";
import classes from "./shape.module.scss"
import Tool from "~/Tool";

const Shape = (props: IShapeProps) => {
  const { x, y, width, height, html, id, tool } = props;

  const groupRef = useRef<Konva.Group | null>(null);
  const imageRef = useRef<Image | null>(null);
  const htmlRef = useRef<HTMLDivElement>(null);

  const {handleClick, handleInput, isEditing, value} = useShapeVm({...props, groupRef, imageRef});

  return (
    <>
      <Group x={x} y={y} onClick={handleClick} ref={groupRef} draggable={tool === Tool.CURSOR}>
        <Rect stroke={"black"} width={width} height={height} />
        {isEditing && (
          <Html>
            <div className={classes.textEditorContainer} style={{left: width}}>
              <TextEditor value={value} handleChange={handleInput} />
            </div>
          </Html>
        )}
      </Group>
      <Html>
        <HtmlText ref={htmlRef} html={html} id={id} />
      </Html>
    </>
  );
};

export default Shape;
