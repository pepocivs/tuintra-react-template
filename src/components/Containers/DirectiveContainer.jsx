import React from "react";
import styled from "styled-components";

/** Custom Components */
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";

const DirectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin-top: 20px;
`;

function DirectiveContainer({directors}) {
  return (
    <>
      <Title shadow="Nuestra Directiva">Directiva</Title>
      <DirectorsContainer>
				{directors.map(director => {
					return (
            <Card
              key={director._id}
              bgImage={director.directorData.picture}
              title={director.name.public}
              subtitle={director.directorData.position}
              width="150px"
              height="200px">
            </Card>
					);
				})}
			</DirectorsContainer>
    </>
  )
}

export default DirectiveContainer;