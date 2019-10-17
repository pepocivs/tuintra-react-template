import React from "react";

/** Custom components */
import HistoricCard from "./HistoricCard";

function HistoricCards({leagues = []}) {
  return (
    <>
      {leagues.map((league, index) => {
        return (
          <HistoricCard
            key={league.competitionName}
            reverse={(index % 2 !== 0)}
            title={league.competitionName}
            sportId={league.sportId}
            ambit={league.ambit}
            positions={league.results}
          />
        )
        })
      }
    </>
  )
}

export default HistoricCards;
