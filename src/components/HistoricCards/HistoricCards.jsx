import React from "react";

/** Custom components */
import HistoricCard from "./HistoricCard";

function HistoricCards({leagues = {}}) {
  return (
    <>
      {Object.keys(leagues).map((league, index) => {
        return (
          <HistoricCard
            key={league}
            reverse={(index % 2 !== 0)}
            title={league}
            positions={leagues[league]}
          />
        )
        })
      }
    </>
  )
}

export default HistoricCards;
