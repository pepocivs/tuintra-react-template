import React from "react";
import styled from "styled-components";

/** Custom components */
import Alert from "components/UI/Alert/Alert";

const StandingContainer = styled.div`
  display: grid;
  grid-template-columns: ${({minified}) => (minified) ? '20px 25px 5fr repeat(4, 1fr)': '20px 25px 5fr repeat(8, 1fr)'};
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
  display: ${({minified}) => (minified) ? 'none': 'initial'};
`;

const TableHeadName = styled(TableHead)`
  min-width: 75px;
`;

const InfoCell = styled.div`
  text-align: center;
  display: ${({minified}) => (minified) ? 'none': 'initial'};
`;

const HighligtedCell = styled(InfoCell)`
  font-weight: bold;
`;

const Shield = styled.img`
  width: 25px;
`;

const TeamName = styled.div`
  font-size: ${({minified}) => (minified) ? '10px': 'initial'};
`;

export default function Standings({standing, minified = false}) {
  if (!standing || standing.length === 0) return <Alert icon="info" iconColor="#aec6cf" msg="Clasificación no disponible" />
  return (
    <>
      <StandingContainer header={true} minified={minified}>
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHeadName>Equipo</TableHeadName>
        <TableHead minified={minified}>Pj</TableHead>
        <TableHead>Pg</TableHead>
        <TableHead>Pe</TableHead>
        <TableHead>Pp</TableHead>
        <TableHead minified={minified}>Gf</TableHead>
        <TableHead minified={minified}>Gc</TableHead>
        <TableHead minified={minified}>Dg</TableHead>
        <TableHead>Ptos</TableHead>
      </StandingContainer>
      {standing.map((row, index) => (
        <StandingContainer key={row.position} reverse={(index % 2 === 0)} minified={minified}>
          <InfoCell>{row.position}º</InfoCell>
          <Shield src={row.teamData.shield[100]} alt={row.teamData.name} />
          <TeamName minified={minified}>{row.teamData.name}</TeamName>
          <InfoCell minified={minified}>{row.winGames+row.tieGames+row.loseGames}</InfoCell>
          <InfoCell>{row.winGames}</InfoCell>
          <InfoCell>{row.tieGames}</InfoCell>
          <InfoCell>{row.loseGames}</InfoCell>
          <InfoCell minified={minified}>{row.goalsFor}</InfoCell>
          <InfoCell minified={minified}>{row.goalsAgainst}</InfoCell>
          <InfoCell minified={minified}>{row.goalsDifference}</InfoCell>
          <HighligtedCell>{row.points}</HighligtedCell>
        </StandingContainer>
      ))}
    </>
  )
}
