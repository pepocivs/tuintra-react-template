import React from "react";
import styled from "styled-components";

/** Custom components */
import Alert from "components/UI/Alert/Alert";

const StandingContainer = styled.div`
  display: grid;
  grid-template-columns: 20px 25px 5fr repeat(7, 1fr);
  align-items: center;
  grid-gap: 5px 10px;
  padding: 5px;
  background-color: ${({theme, header, reverse}) => (header) 
    ? theme.clubOptions.secundary_color_web 
    : (reverse) 
      ? theme.colors.grey 
      : theme.colors.light
  };
`;

const TableHead = styled.div`
  font-weight: bold;
  text-align: center;
`;

const InfoCell = styled.div`
  text-align: center;
`;

const HighligtedCell = styled(InfoCell)`
  font-weight: bold;
`;

const Shield = styled.img`
  width: 25px;
`;

export default function Standings({standing}) {
  if (standing.length === 0) return <Alert msg="Clasificación no disponible" />
  return (
    <>
      <StandingContainer header={true}>
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHead>Equipo</TableHead>
        <TableHead>Pj</TableHead>
        <TableHead>Pg</TableHead>
        <TableHead>Pe</TableHead>
        <TableHead>Pp</TableHead>
        <TableHead>Gf</TableHead>
        <TableHead>Gc</TableHead>
        <TableHead>Ptos</TableHead>
      </StandingContainer>
      {standing.map((row, index) => (
        <StandingContainer key={row.position} reverse={(index % 2 === 0)}>
          <div>{row.position}º</div>
          <Shield src={row.teamData.shield[100]} alt={row.teamData.name} />
          <div>{row.teamData.name}</div>
          <InfoCell>{row.winGames}</InfoCell>
          <InfoCell>{row.tieGames}</InfoCell>
          <InfoCell>{row.loseGames}</InfoCell>
          <InfoCell>{row.goalsFor}</InfoCell>
          <InfoCell>{row.goalsAgainst}</InfoCell>
          <InfoCell>{row.goalsDifference}</InfoCell>
          <HighligtedCell>{row.points}</HighligtedCell>
        </StandingContainer>
      ))}
    </>
  )
}
