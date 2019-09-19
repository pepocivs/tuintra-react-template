import React from "react";
import styled from "styled-components";
import { Media } from "react-breakpoints";

/** Custom Components */
import Card from "components/Card/Card";

const PlayersContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin-top: 20px;
`;

function TeamContainer(props) {
	const { selectedTeam } = props;
	 
	return (
		<>
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] >= breakpoints.tablet ? (
            <Card
              bgImage={selectedTeam.picture}
              title={selectedTeam.teamName}
              subtitle={`${selectedTeam.category} ${selectedTeam.gender}`}
              width="100%"
              height="350px">
            </Card>
          ) : (
            <Card
              bgImage={selectedTeam.picture}
              title={selectedTeam.teamName}
              subtitle={`${selectedTeam.category} ${selectedTeam.gender}`}
              width="100%"
              height="240px">
            </Card>
          )
        }
      </Media>
			<PlayersContainer>
				{selectedTeam.staff.map(staff => {
					return (
            <Card
              key={staff._id}
              bgImage={staff.picture}
              title={staff.name.public}
              subtitle={`#${staff.number} ${(staff.rol) ? `- ${staff.rol}` : ''}`}
              width="150px"
              height="200px">
            </Card>
					);
				})}
			</PlayersContainer>
      <PlayersContainer>
				{selectedTeam.players.map(player => {
					return (
            <Card
              key={player._id}
              bgImage={player.picture}
              title={player.name.public}
              subtitle={`#${player.number} ${(player.rol) ? `- ${player.rol}` : ''}`}
              width="150px"
              height="200px">
            </Card>
					);
				})}
			</PlayersContainer>
		</>
	)
}

export default TeamContainer;

