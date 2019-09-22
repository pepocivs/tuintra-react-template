import React from "react";
import styled from "styled-components";

const StandingContainer = styled.div`
  display: grid;
  grid-template-columns: 20px 25px 5fr repeat(7, 1fr);
  align-items: center;
  grid-gap: 5px 10px;
  margin-bottom: 5px;
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
  return (
    <>
      <StandingContainer>
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
      {standing.map(row => (
        <StandingContainer key={row.position}>
          <div>{row.position}</div>
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
