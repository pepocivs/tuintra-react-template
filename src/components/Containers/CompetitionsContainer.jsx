import React from "react";
import { Link } from "react-router-dom";
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
            <Link key={competition._id} to={`/competiciones/${competition._id}`}>
							<Card
                bgImage={`/assets/${competition.icon}.png`}
                title={competition.competitionName}
                subtitle={`${competition.category} ${competition.gender}`}
                width="150px"
                height="150px">
              </Card>
            </Link>
            
          )
        })}
      </CompetitionContainer>
    </>
  )
}

export default CompetitionsContainer;