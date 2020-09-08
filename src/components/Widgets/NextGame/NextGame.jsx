import React, { useEffect } from "react";
import { connect } from "react-redux";

/** Custom components */
import GameBox from "./GameBox";
import Loading from "components/Containers/Loading";
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

function NextGame({fetchCalendar, calendar, widgetInfo}) {
  useEffect(() => {
    fetchCalendar({nDays: 7});
  }, [fetchCalendar]);
  if (!calendar.ready) return <Loading />;
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
  ).map(game => ({ ...game, showLastResults: widgetInfo.showLast }));
  const teamCompetitionId = (widgetInfo.showLast) ? nextGames.map(nextGame => [`${nextGame.local._id}-${nextGame.competitionId}`, `${nextGame.away._id}-${nextGame.competitionId}`]).flat() : [];
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      {(nextGames.length === 0) ? <Alert msg="No hay partidos la próxima semana" /> : ''}
      <GameBox nextGames={nextGames} teamCompetitionId={teamCompetitionId} />
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextGame);
