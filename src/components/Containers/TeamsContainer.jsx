import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom Components */
import Card from "components/Card/Card";

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 20px;
`;

function TeamsContainer({ teams }) {
	return (
		<>
			<h2>Equipos</h2>
			<TeamContainer>
				{teams.map(team => {
					return (
            <Link key={team._id} to={`/equipos/${team._id}`}>
							<Card
								key={team._id}
								bgImage={team.picture}
								title={team.teamName}
								subtitle={`${team.category} ${team.gender}`}
								width="250px"
								height="178px">
							</Card>
						</Link>
					);
				})}
			</TeamContainer>
		</>
	)
}

export default TeamsContainer;
