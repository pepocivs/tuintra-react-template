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


function Standing({fetchStanding, standing, competitionIds, widgetConfigIds = {}}) {
  useEffect(() => {
    fetchStanding(competitionIds);
  }, [fetchStanding, competitionIds]);
  if (!standing.ready) return <Loading />;
  if (Object.values(widgetConfigIds).length === 0) return <Alert icon="danger" iconColor="#cfb7ae" msg="Widget no configurado" />;
  return (
    <>
    {
      Object.values(widgetConfigIds).map(widgetConfigId => {
        const currentStanding = Object.values(standing.data).find(d => d._id === parseInt(widgetConfigId));
        if (!currentStanding) {
          return (<Alert 
            key={`alert-${widgetConfigId}`} 
            icon="info"
            iconColor="#aec6cf" 
            msg="Clasificación no disponible" />);
        }
        const gameDay = (currentStanding && currentStanding.standings) 
        ? Object.keys(currentStanding.standings).slice(-1).pop() 
        : null;
        const groupName = (currentStanding.group) ? ` - Grupo ${currentStanding.group}` : '';
        return (
          <div key={`${widgetConfigId}${currentStanding.group}`}>
            <Title>{currentStanding.name} {currentStanding.category} {currentStanding.gender} {groupName}</Title>
            <Standings standing={currentStanding.standings[gameDay]} minified></Standings>
          </div>
        );
      })
    }
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standing);
