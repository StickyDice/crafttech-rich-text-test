import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ITextEditorProps from "~/components/TextEditor/ITextEditorProps";

const toolbarOptions = [
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script:  "sub" }, { script:  "super" }],
  ["blockquote", "code-block"],
  [{ list:  "ordered" }, { list:  "bullet" }],
  [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
  ["link"],
  ["clean"],
];

export default function TextEditor(props: ITextEditorProps) {
  const {value, handleChange} = props;

  return (
    <ReactQuill
      className="quill-container"
      value={value}
      onChange={handleChange}
      modules={{toolbar: toolbarOptions}}
    />
  )
}