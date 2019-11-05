import React from "react";

import Standing from "./Standing";

function StandingContainer({widgetInfo, competitionIds}) {
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      <Standing competitionIds={competitionIds} widgetConfigIds={widgetInfo.content} />
    </>
  )
}

export default StandingContainer;
