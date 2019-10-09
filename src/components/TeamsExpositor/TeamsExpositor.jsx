import React from "react";
import styled from "styled-components";

const ShieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 40px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.grey};
  border-radius: 5px;
  padding: 10px;
`;

const TeamShield = styled.img`
  width: 40px;
`;

function TeamsExpositor({teams}) {
  return (
    <ShieldContainer>
      {teams.map(team => {
        return (team.type !== "3") 
          ? <TeamShield key={team._id} src={team.shield[100]} alt={team.teamName}></TeamShield>
          : null
      }
      )}
    </ShieldContainer>
  )
}

export default TeamsExpositor;
