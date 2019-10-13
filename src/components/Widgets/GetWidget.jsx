import React from "react";

import Birthday from "./Birthday/Birthday";
import NextGame from "./NextGame/NextGame";
import Text from "./Text/Text";
import StandingContainer from "./Standing/StandingContainer";
import Teams from "./Teams/Teams";

function GetWidget({widget}) {
  if (!widget) return null;
  switch (widget.type) {
    case 'birthday':
      return <Birthday widgetInfo={widget.content} />
    case 'nextgame':
      return <NextGame widgetInfo={widget.content} />
    case 'text':
      return <Text widgetInfo={widget.content} />
    case 'standings':
      return <StandingContainer widgetInfo={widget.content} />
    case 'team_picture':
      return <Teams widgetInfo={widget.content} />
    default:
      return null;
  }
}

export default GetWidget;
