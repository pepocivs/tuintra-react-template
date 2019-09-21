import React from 'react'
import styled from "styled-components";

const TeamRowContainer = styled.div`
  display: grid;
  grid-template-areas: "${({position}) => (position === 'right') ? 'teamName shield' : 'shield teamName'}";
  grid-template-columns: ${({position}) => (position === 'right') ? '3fr 1fr' : '1fr 3fr'};
`;

const Shield = styled.img`
  grid-area: shield;
`;

const Name = styled.div`
  grid-area: teamName;
  text-align: ${({position}) => position};
`;

function TeamRowItem({image, name, shieldPosition}) {
  return (
    <TeamRowContainer position={shieldPosition}>
      <Name position={shieldPosition}>{name}</Name>
      <Shield src={image} alt={name} />
    </TeamRowContainer>
  )
}

export default TeamRowItem;