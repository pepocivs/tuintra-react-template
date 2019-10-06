import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom Components */
import Title from "components/UI/Title/Title";
import Card from "components/UI/Card/Card";

const CompetitionContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
  justify-content: space-between;
  text-align: center;
  font-size: 10px;
`;

function CompetitionList({competitions}) {
  return (
    <>
      <Title shadow="Competiciones">Competiciones</Title>
      <CompetitionContainer>
        {competitions.map(competition => {
          return (
            <Link key={competition._id} to={`/competiciones/${competition._id}`}>
							<Card
                bgImage={`/assets/competitions/${competition.icon}`}
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

export default CompetitionList;