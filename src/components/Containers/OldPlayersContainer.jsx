import React, { useEffect } from "react";
import styled from "styled-components";

/** Custom Components */
import Loading from "components/Containers/Loading";
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";
import Alert from "components/UI/Alert/Alert";

const OldPlayersContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 20px;
  justify-content: space-between;  
  margin-top: 20px;
`;

function OldPlayersContainer({fetchPeople, oldPlayers}) {
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);
  if (!oldPlayers.ready) return <Loading />;
  return (
    <>
      <Title shadow="Giner de los Ríos">Histórico de Jugadores</Title>
      {(oldPlayers.data.length === 0)
        ? <Alert icon="info" iconColor="#aec6cf" msg="Jugadores antiguos no disponibles" />
        : <OldPlayersContainerDiv>
            {oldPlayers.data.map(oldPlayer => {
              const picture = oldPlayer.showPicture 
                ? (((oldPlayer.playerData || {}).picture || '').includes('nofoto'))
                  ? '/assets/general/p_nofoto.png'
                  : ((oldPlayer.playerData || {}).picture || '/assets/general/p_nofoto.png') 
                : '/assets/general/p_nofoto.png'
              return (
                <Card
                  key={oldPlayer._id}
                  bgImage={picture}
                  title={oldPlayer.name.public}
                  subtitle={(oldPlayer.playerData || {}).number || '-'}
                  width="150px"
                  height="200px">
                </Card>
              );
            })}
          </OldPlayersContainerDiv>
      }
    </>
  )
}

export default OldPlayersContainer;