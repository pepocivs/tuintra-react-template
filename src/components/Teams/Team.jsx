import React from "react";
import styled from "styled-components";

/** Custom Components */
import Card from "components/UI/Card/Card";
import NotFound from "components/Containers/NotFound";

const PlayersContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
	justify-content: space-evenly;
  margin-top: 20px;
`;

function Team({ selectedTeam }) {
  if (!selectedTeam) return (<NotFound />);
	return (
		<>
      <Card
        bgImage={selectedTeam.picture || '/assets/general/e_nofoto.jpg'}
        title={selectedTeam.teamName}
        subtitle={`${selectedTeam.category} ${selectedTeam.gender}`}
        width="100%"
        height="50vw">
      </Card>
			<PlayersContainer>
				{selectedTeam.staff.map(staff => {
					return (
            <Card
              key={staff._id}
              bgImage={staff.picture || '/assets/general/p_nofoto.png'}
              title={staff.name.public}
              subtitle={staff.rol}
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
              bgImage={player.picture || '/assets/general/p_nofoto.png'}
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

export default Team;

