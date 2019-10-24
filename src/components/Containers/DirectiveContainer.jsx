import React, { useEffect } from "react";
import styled from "styled-components";

/** Custom Components */
import Loading from "components/Containers/Loading";
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";

const DirectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 20px;
  justify-content: space-between;  
  margin-top: 20px;
`;

function DirectiveContainer({fetchPeople, directive}) {
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);
  if (!directive.ready) return <Loading />;
  return (
    <>
      <Title shadow="Nuestra Directiva">Directiva</Title>
      <DirectorsContainer>
				{directive.data.map(director => {
					return (
            <Card
              key={director._id}
              bgImage={director.directorData.picture || '/assets/general/p_nofoto.png'}
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