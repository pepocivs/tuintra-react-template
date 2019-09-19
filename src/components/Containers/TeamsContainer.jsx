import React from "react";
import styled from "styled-components";

/** Custom Components */
import Card from "components/Card/Card";

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 250px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;

function TeamsContainer(props) {
	const { teams } = props;
	 
	return (
		<>
			<h2>Equipos</h2>
			<TeamContainer>
				{teams.map(team => {
					return (
						<div key={team._id}>
							<Card
								bgImage={team.picture}
								title={team.teamName}
								subtitle={`${team.category} ${team.gender}`}
								width="250px"
								height="178px">
							</Card>
						</div>
					);
				})}
			</TeamContainer>
		</>
	)
}

export default TeamsContainer;
