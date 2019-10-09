import React from "react";

import Birthday from "./Birthday/Birthday";
import NextGame from "./NextGame/NextGame";

function GetWidget({widget}) {
  if (!widget) return null;
  switch (widget.type) {
    case 'birthday':
      return <Birthday widgetInfo={widget.content} />
    case 'nextgame':
      return <NextGame widgetInfo={widget.content} />
    default:
      return (<div>{widget.type}</div>);
  }
}

export default GetWidget;
