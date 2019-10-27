import React from "react";

/** Custom Components */
import Title from "components/UI/Title/Title";
import TeamsExpositor from "components/TeamsExpositor/TeamsExpositor";
import Schedule from "components/Schedule/Schedule";
import Standings from "components/Standings/Standings";

function CompetitionDetail({title, shadow, teams, calendar, standing}) {
  if (!calendar) return null;
  return (
    <>
      <Title shadow={shadow}>{title}</Title>
      <TeamsExpositor teams={teams}></TeamsExpositor>
      <Schedule calendar={calendar}></Schedule>
      <br />
      <Standings standing={standing}></Standings>
    </>
  )
}

export default CompetitionDetail;
