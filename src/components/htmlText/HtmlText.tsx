import { forwardRef } from "react";
import IHtmlTextProps from "~/components/htmlText/IHtmlTextProps";

const HtmlText = forwardRef<HTMLDivElement, IHtmlTextProps>((props, ref) => {
  const {id, html} = props;
  return (
    <div
      id={`htmltext_${id}`}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        position: "fixed",
        overflow: "hidden",
        left: "100000px",
        top: "100000px",
      }}
      ref={ref}
    ></div>
  );
});

export default HtmlText;
