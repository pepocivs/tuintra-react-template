import React from "react";

import Birthday from "./Birthday/Birthday";
import NextGame from "./NextGame/NextGame";
import Text from "./Text/Text";
import StandingContainer from "./Standing/StandingContainer";
import Teams from "./Teams/Teams";
import Callups from "./Callups/Callups";

function GetWidget({widget, joinedContent}) {
  if (!widget) return null;
  switch (widget.type) {
    case 'birthday':
      return <Birthday widgetInfo={widget.content} />
    case 'nextgame':
      return <NextGame widgetInfo={widget.content} />
    case 'text':
      return <Text widgetInfo={widget.content} />
    case 'standings':
      return <StandingContainer widgetInfo={widget.content} competitionIds={joinedContent.standings.join(',')} />
    case 'team_picture':
      return <Teams widgetInfo={widget.content} teamIds={joinedContent.team_picture.join(',')} />
    case 'callups':
      return <Callups widgetInfo={widget.content} />
    default:
      return null;
  }
}

export default GetWidget;
