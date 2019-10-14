import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom Components */
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
	grid-row-gap: 20px;
	justify-content: space-between;
	@media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

function TeamList({ teams }) {
	return (
		<>
			<Title shadow="Nuestros equipos">Equipos</Title>
			<TeamContainer>
				{teams.map(team => {
					return (
            <Link key={team._id} to={`/equipos/${team._id}`}>
							<Card
								key={team._id}
								bgImage={team.picture || '/assets/general/e_nofoto.jpg'}
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

export default TeamList;
