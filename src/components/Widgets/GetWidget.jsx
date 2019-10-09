import React from "react";

import Birthday from "./Birthday/Birthday";
import NextGame from "./NextGame/NextGame";
import Text from "./Text/Text";

function GetWidget({widget}) {
  if (!widget) return null;
  switch (widget.type) {
    case 'birthday':
      return <Birthday widgetInfo={widget.content} />
    case 'nextgame':
      return <NextGame widgetInfo={widget.content} />
    case 'text':
      return <Text widgetInfo={widget.content} />
    default:
      return (<h2>{widget.content.title}</h2>);
  }
}

export default GetWidget;
