import React from "react";

function StandingGraph({standing}) {
  if (!standing || standing.length === 0) return null;
  
  return (
    <div>
      ---
      Chart
      ---
    </div>
  )
}

export default StandingGraph;
