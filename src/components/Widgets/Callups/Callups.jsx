import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Moment from 'react-moment';
import 'moment/locale/es';

/** Custom components */
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";

/** ACTIONS */
import actionsCallups from "../../../redux/callups/actions";

/** SELECTORS */
import {
  getCallups,
  getCallupsLoading,
  getCallupsReady,
  getCallupsError,
  getCallupsHasError
} from "../../../redux/callups/selectors";

const mapStateToProps = (state, props) => ({
  callups: {
    data: getCallups(state),
    loading: getCallupsLoading(state),
    ready: getCallupsReady(state),
    error: getCallupsError(state),
    hasError: getCallupsHasError(state)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchCallups: (params) => dispatch(actionsCallups.fetchCallups(params)),
});

/** STYLES */
const CallupBox = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  background-color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
`;

const ExtraInfo = styled.div`
  font-size: ${({big}) => (big) ? "15px" : "10px"};
  text-transform: ${({uppercase}) => (uppercase) ? "uppercase" : "initial"};
  font-style: italic;
  text-align: center;
`;

const GameRow = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const TeamName = styled.div`
  text-align: ${({position}) => position};
  font-size: 11px;
  text-align: center;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    font-size: 11px;
  }
`;

const TeamShield = styled.img`
  width: 30px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    width: 20px;
  }
`;

const PlayersBox = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-bottom: 5px;
`;

const PlayerPicture = styled.div`
  background-image: url(${({src}) => src});
  background-size: cover;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin: 5px;
  border: 2px solid ${({color, theme}) => theme.colors[color]};
`;

const BirthdayInfo = styled.div`
  align-self: center;
`;

function Callup({fetchCallups, callups, widgetInfo}) {
  useEffect(() => {
    fetchCallups(widgetInfo.content);
  }, [fetchCallups, widgetInfo]);
  if (!callups.ready) return <Loading />;
  if(Object.keys(callups.data).length === 0 || !widgetInfo.content) {
    return (
      <>
        <h2>{widgetInfo.title}</h2>
        <Alert icon="info" iconColor="#aec6cf" msg="No hay convocatoria para la próxima semana" />
      </>
    );
  }
  const callupData = callups.data[widgetInfo.content];
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      {(callupData && callupData.players.length === 0) 
          ? <Alert msg="No hay jugadores convocados para la próxima semana" />
          : ''} 
      <CallupBox>
        <ExtraInfo uppercase>Convocatoria para el partido del día:</ExtraInfo>
        <ExtraInfo uppercase><Moment format="dddd, DD MMMM" date={callupData.gameDate}/></ExtraInfo>
        <ExtraInfo>{callupData.competitionName} {callupData.competitionCategory} {callupData.competitionGender}</ExtraInfo>
        <GameRow>
          <TeamShield src={callupData.localShield} alt={callupData.localName}/>
          <TeamShield src={callupData.awayShield} alt={callupData.awayName}/>
          <TeamName position="left">{callupData.localName}</TeamName>
          <TeamName position="right">{callupData.awayName}</TeamName>
        </GameRow>
        {callupData.players.map(player => {
          return (
            <PlayersBox key={player.playerData._id}>
              <PlayerPicture
                src={player.playerData.picture}
                color={
                  (player.status._id === 0) 
                    ? "warning" 
                    : (player.status._id === 1) 
                      ? "success"
                      : "danger"}/>
              <BirthdayInfo>{player.playerData.name.public}</BirthdayInfo>
            </PlayersBox>
          );
        })}
      </CallupBox>
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callup);
