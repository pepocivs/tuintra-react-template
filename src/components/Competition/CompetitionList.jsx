import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom Components */
import Title from "components/UI/Title/Title";
import Card from "components/UI/Card/Card";
import Alert from "components/UI/Alert/Alert";

const CompetitionContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 20px;
  justify-content: space-between;
  text-align: center;
  font-size: 10px;
`;

function CompetitionList({competitions}) {
  return (
    <>
      <Title shadow="Competiciones">Competiciones</Title>
      {(Object.keys(competitions).length === 0)
        ? <Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado competiciones" />
        : <CompetitionContainer>
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
      }
    </>
  )
}

export default CompetitionList;