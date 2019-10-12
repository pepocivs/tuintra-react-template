import React, { useEffect } from "react";
import { connect } from "react-redux";

/** Custom components */
import Alert from "components/UI/Alert/Alert";
import Standings from "components/Standings/Standings";

/** ACTIONS */
import actionsStanding from "../../../redux/standing/actions";

/** SELECTORS */
import {
  getStanding,
  getStandingLoading,
  getStandingReady,
  getStandingError,
  getStandingHasError
} from "../../../redux/standing/selectors";

const mapStateToProps = (state, props) => ({
  standing: {
    data: getStanding(state),
    loading: getStandingLoading(state),
    ready: getStandingReady(state),
    error: getStandingError(state),
    hasError: getStandingHasError(state)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchStanding: (params) => dispatch(actionsStanding.fetchStanding(params)),
});

/** Styles */
function Standing({fetchStanding, standing, competitionIds}) {
  useEffect(() => {
    fetchStanding(competitionIds);
  }, [fetchStanding, competitionIds]);
  if (!standing.ready) return null;
  return (
    <>
    {competitionIds.split(',').map(competitionId => {
      const standingInfo = Object.keys(standing.data)
        .filter(key => standing.data[key]._id.toString() === competitionId)
        .map(key => standing.data[key])[0];
      if (!standingInfo) return null;
      return (
        <div key={competitionId}>
          <h2>{standingInfo.name} {standingInfo.category} {standingInfo.gender}</h2>
          <Standings standing={standingInfo} minified></Standings>
        </div>
      );
    })}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standing);
