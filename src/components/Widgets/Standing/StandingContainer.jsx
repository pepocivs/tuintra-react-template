import React from "react";

import Standing from "./Standing";

function StandingContainer({widgetInfo}) {
  const competitionIds = Object.values(widgetInfo.content).join(',');
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      <Standing competitionIds={competitionIds} />
    </>
  )
}

export default StandingContainer;
