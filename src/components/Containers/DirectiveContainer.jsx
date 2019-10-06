import React, { useEffect }  from "react";
import styled from "styled-components";

/** Custom Components */
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";

const DirectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
  justify-content: space-between;  
  margin-top: 20px;
`;

function DirectiveContainer({fetchDirective, directive = []}) {
  useEffect(() => {
    fetchDirective();
  }, [fetchDirective]);
  if (!directive.ready) return null;
  return (
    <>
      <Title shadow="Nuestra Directiva">Directiva</Title>
      <DirectorsContainer>
				{directive.map(director => {
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