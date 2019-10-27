import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

/** Custom components */
import Loading from "components/Containers/Loading";
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
const Title = styled.h2`
  font-size: 16px;
`;


function Standing({fetchStanding, standing, competitionIds}) {
  useEffect(() => {
    fetchStanding(competitionIds);
  }, [fetchStanding, competitionIds]);
  if (!standing.ready) return <Loading />;
  if (Object.keys(standing.data).length === 0) return <Alert icon="info" iconColor="#aec6cf" msg="Clasificación no disponible" />
  return (
    <>
    {(competitionIds).split(',').map(competitionId => {
      const standingsInfo = Object.keys(standing.data)
        .filter(key => standing.data[key]._id.toString() === competitionId)
        .map(key => standing.data[key]);
      return standingsInfo.map(standingInfo => {
        if (!standingInfo) return null;
        const gameDay = (standingInfo && standingInfo.standings) 
        ? Object.keys(standingInfo.standings).slice(-1).pop() 
        : null;
        const groupName = (standingInfo.group) ? ` - Grupo ${standingInfo.group}` : '';
        return (
          <div key={`${competitionId}${standingInfo.group}`}>
            <Title>{standingInfo.name} {standingInfo.category} {standingInfo.gender} {groupName}</Title>
            <Standings standing={standingInfo.standings[gameDay]} minified></Standings>
          </div>
        );
      })
    })}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standing);
