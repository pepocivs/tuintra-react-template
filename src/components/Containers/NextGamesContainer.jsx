import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

/** Custom components */
import GameBox from "components/Widgets/NextGame/GameBox";
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";
import Title from "components/UI/Title/Title";

/** ACTIONS */
import actionsCalendar from "../../redux/calendar/actions";

/** SELECTORS */
import {
  getCalendar,
  getCalendarLoading,
  getCalendarReady,
  getCalendarError,
  getCalendarHasError
} from "../../redux/calendar/selectors";

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
const GameContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

function NextGamesContainer({fetchCalendar, calendar}) {
  useEffect(() => {
    fetchCalendar({nDays: 7});
  }, [fetchCalendar]);
  if (!calendar.ready) return <Loading />;
  if(Object.keys(calendar.data).length === 0) {
    return (
      <>
        <Title shadow="Próximos Partidos">Próximos Partidos</Title>
        <Alert icon="info" iconColor="#aec6cf" msg="No hay partidos la próxima semana" />
      </>
    );
  }
  const nextGames = calendar.data.filter(game => game.local.type === 1 || game.away.type === 1).map(game => ({ ...game, showLastResults: true }));
  const teamCompetitionId = nextGames.map(nextGame => [`${nextGame.local._id}-${nextGame.competitionId}`, `${nextGame.away._id}-${nextGame.competitionId}`]).flat();
  return (
    <>
      <Title shadow="Próximos Partidos">Próximos Partidos</Title>
      {(nextGames.length === 0) ? <Alert icon="info" iconColor="#aec6cf" msg="No hay partidos la próxima semana" /> : ''}
      <GameContainer>
        <GameBox nextGames={nextGames} teamCompetitionId={teamCompetitionId} isSocialNetwork={true} />
      </GameContainer>
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextGamesContainer);
