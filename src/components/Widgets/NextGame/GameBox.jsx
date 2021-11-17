import React, { useEffect } from "react";
import { connect } from "react-redux";
import 'moment/locale/es';

/** Custom components */
import ScheduleBoxHome from "./ScheduleBoxHome";
import ScheduleBoxSocial from "./ScheduleBoxSocial";
import Loading from "components/Containers/Loading";

/** ACTIONS */
import actionsStats from "../../../redux/stats/actions";

/** SELECTORS */
import {
  getStats,
  getStatsLoading,
  getStatsReady,
  getStatsError,
  getStatsHasError
} from "../../../redux/stats/selectors";

const mapStateToProps = (state, props) => ({
  stats: {
    data: getStats(state),
    loading: getStatsLoading(state),
    ready: getStatsReady(state),
    error: getStatsError(state),
    hasError: getStatsHasError(state)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchStats: (teamCompetitionId) => dispatch(actionsStats.fetchStats(teamCompetitionId)),
});

function GameBox({fetchStats, stats, teamCompetitionId, nextGames, isSocialNetwork = false}) {
  const teamCompetition = removeDuplicates(teamCompetitionId).join(',');
  useEffect(() => {
    if (teamCompetition.length > 0) fetchStats(teamCompetition);
  }, [fetchStats, teamCompetition]);
  if (!stats.ready && teamCompetition.lentgh > 0) return <Loading />;
  return (
    (isSocialNetwork) 
      ? (<ScheduleBoxSocial nextGames={nextGames} stats={stats} />)
      : (<ScheduleBoxHome nextGames={nextGames} stats={stats} />)
  );
}

function removeDuplicates(array) {
  return Array.from(new Set(array));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBox);
