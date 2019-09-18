import React from 'react';

function TeamsContainer(props) {
	const { teams } = props;
	const width = { width: '250px' };
	 
	return (
		<div className="main">
			<h2>Equipos</h2>
			<div className="grid-container">
				{teams.map(team => {
					return (
						<div key={team._id} className="grid-item">
							<div className="team-info">
								<h2>{team.teamName}</h2>
								<p>{team.category} {team.gender}</p>
							</div>
							<img style={width} src={team.picture} alt={team.teamName} />
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default TeamsContainer;
