import React from 'react';
import styled from "styled-components";

/** Custom Components */
import Card from "components/Card/Card";

const CompetitionContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  text-align: center;
  font-size: 10px;
`;

function CompetitionsContainer({competitions}) {
  return (
    <>
      <h2>Competiciones</h2>
      <CompetitionContainer>
        {competitions.map(competition => {
          return (
            <Card
              key={competition._id}
              bgImage={`/assets/${competition.icon}.png`}
              title={competition.competitionName}
              subtitle={`${competition.category} ${competition.gender}`}
              width="150px"
              height="150px">
            </Card>
          )
        })}
      </CompetitionContainer>
    </>
  )
}

export default CompetitionsContainer;