import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Moment from 'react-moment';
import 'moment/locale/es';

/** Custom components */
import Alert from "components/UI/Alert/Alert";

/** ACTIONS */
import actionsCalendar from "../../../redux/calendar/actions";

/** SELECTORS */
import {
  getCalendar,
  getCalendarLoading,
  getCalendarReady,
  getCalendarError,
  getCalendarHasError
} from "../../../redux/calendar/selectors";

const mapStateToProps = (state, props) => ({
  calendar: {
    data: getCalendar(state),
    loading: getCalendarLoading(state),
    ready: getCalendarReady(state),
    error: getCalendarError(state),
    hasError: getCalendarHasError(state)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchCalendar: (params) => dispatch(actionsCalendar.fetchCalendar(params)),
});

/** Styles */
const GameRow = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const ScheduleBox = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  background-color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
`;

const TeamName = styled.div`
  text-align: ${({position}) => position};
  font-size: 15px;
  text-align: center;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
  }
`;

const TeamShield = styled.img`
  width: 65px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLandscape}px) {
    width: 50px;
  }
`;

const ExtraInfo = styled.div`
  font-size: ${({big}) => (big) ? "15px" : "10px"};
  text-transform: ${({uppercase}) => (uppercase) ? "uppercase" : "initial"};
  font-style: italic;
  text-align: center;
`;

function NextGame({fetchCalendar, calendar, widgetInfo}) {
  useEffect(() => {
    fetchCalendar({nDays: 7});
  }, [fetchCalendar]);
  if (!calendar.ready) return null;
  if(Object.keys(calendar.data).length === 0 || !widgetInfo.content) {
    return (
      <>
        <h2>{widgetInfo.title}</h2>
        <Alert icon="info" iconColor="#aec6cf" msg="No hay partidos la próxima semana" />
      </>
    );
  }
  const nextGames = calendar.data.filter(game => 
    Object.values(widgetInfo.content).includes(game.local._id.toString()) || 
    Object.values(widgetInfo.content).includes(game.away._id.toString())
  );
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      {nextGames.map(game => {
        return (
          <ScheduleBox key={game._id}>
            <ExtraInfo big uppercase><Moment format="dddd, DD MMMM" date={game.date}/></ExtraInfo>
            <ExtraInfo big><Moment format="hh:mm" date={game.date}/>h</ExtraInfo>
            <ExtraInfo>{game.facility}</ExtraInfo>
            <GameRow>
              <TeamShield src={game.local.shield[100]} alt={game.local.name}/>
              <TeamShield src={game.away.shield[100]} alt={game.away.name}/>
              <TeamName position="left">{game.local.name}</TeamName>
              <TeamName position="right">{game.away.name}</TeamName>
            </GameRow>
            <ExtraInfo>{game.competition.name} {game.competition.category} {game.competition.gender}</ExtraInfo>
          </ScheduleBox>
        )
      })}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextGame);
