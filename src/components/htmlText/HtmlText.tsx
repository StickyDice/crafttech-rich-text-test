import { forwardRef } from "react";
import IHtmlTextProps from "~/components/htmlText/IHtmlTextProps";
import classes from "./htmlText.module.scss"

const HtmlText = forwardRef<HTMLDivElement, IHtmlTextProps>((props, ref) => {
  const {id, html} = props;
  return (
    <div
      id={`htmltext_${id}`}
      dangerouslySetInnerHTML={{ __html: html }}
      className={classes.hiddenHtmlText}
      ref={ref}
    ></div>
  );
});

export default HtmlText;
