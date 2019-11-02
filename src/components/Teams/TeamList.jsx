import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom Components */
import Card from "components/UI/Card/Card";
import Alert from "components/UI/Alert/Alert";
import Title from "components/UI/Title/Title";

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
	grid-gap: 20px;
	justify-content: space-between;
	@media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

function TeamList({ teams }) {
	return (
		<>
			<Title shadow="Nuestros equipos">Equipos</Title>
			{(Object.keys(teams).length === 0)
				?	<Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado equipos del club" />
				: <TeamContainer>
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
			}
		</>
	)
}

export default TeamList;
