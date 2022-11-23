import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

/** Custom components */
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";
import Title from "components/UI/Title/Title";
import ScheduleDay from "components/Schedule/ScheduleDay";
import StreamCover from "components/Stream/StreamCover/StreamCover";

/** ACTIONS */
import actionsCalendar from "../../redux/calendar/actions";

/** Helpers */

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
  gap: 50px;
  flex-wrap: wrap;
`;
const GameCard = styled.a`
  width: 50%;
  max-width: 250px;
  border: 1px solid #CCC;
  padding: 10px;
`;

function ResourcesContainer({fetchCalendar, calendar, match}) {
  useEffect(() => {
    fetchCalendar({nDays: 7});
  }, [fetchCalendar]);
  const selectedGame = match.params.selectedGame;

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
  const selectedGameData = (selectedGame) ? nextGames.filter(game => game._id === parseInt(selectedGame)) : [];

  if (selectedGameData.length > 0) {
    
    return (
      <>
        <h3>{selectedGameData[0].competition.name} {selectedGameData[0].competition.category} {selectedGameData[0].competition.gender}</h3>
        <ScheduleDay key={selectedGameData[0]._id} game={selectedGameData[0]} />
        <StreamCover game={selectedGameData[0]}></StreamCover>
      </>
    );
    /**
     * <StreamInGame game={selectedGameData[0]}></StreamInGame>
     * <StreamBreak game={selectedGameData[0]}></StreamBreak>
     */
  } else {
    return (
      <>
        <Title shadow="Próximos Partidos">Próximos Partidos</Title>
        {(nextGames.length === 0) ? <Alert icon="info" iconColor="#aec6cf" msg="No hay partidos la próxima semana" /> : ''}
        <GameContainer>
          {
            nextGames.map(game => {
              return (
                <GameCard href={`/recursos/${game._id}`}>
                  <h3>{game.competition.name} {game.competition.category} {game.competition.gender}</h3>
                    <ScheduleDay key={game._id} game={game} reducedGame="true" />
                </GameCard>
              )
            })
          }
        </GameContainer>
      </>
    );
  }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourcesContainer);
