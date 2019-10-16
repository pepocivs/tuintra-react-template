import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom components */
import Alert from "components/UI/Alert/Alert";
import Card from "components/UI/Card/Card";

/** ACTIONS */
import actionsTeams from "../../../redux/teams/actions";

/** SELECTORS */
import {
  getTeams,
  getTeamsLoading,
  getTeamsReady,
  getTeamsError,
  getTeamsHasError
} from "../../../redux/teams/selectors";

const mapStateToProps = (state, props) => ({
  teams: {
    data: getTeams(state),
    loading: getTeamsLoading(state),
    ready: getTeamsReady(state),
    error: getTeamsError(state),
    hasError: getTeamsHasError(state)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: (params) => dispatch(actionsTeams.fetchTeams(params)),
});

/** Styles */
const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
	grid-gap: 20px;
	justify-content: space-between;
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

function Teams({fetchTeams, teams, widgetInfo}) {
  useEffect(() => {
    fetchTeams(Object.values(widgetInfo.content).join(','));
  }, [fetchTeams, widgetInfo]);
  if (!teams.ready) return null;
  if(Object.keys(teams.data).length === 0) {
    return (
      <>
        <h2>{widgetInfo.title}</h2>
        <Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado equipos para esta temporada" />
      </>
    );
  }
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      <TeamContainer>
        {teams.data.map(team => {
          return (
            <Link key={team._id} to={`/equipos/${team._id}`}>
              <Card
                key={team._id}
                bgImage={team.picture || '/assets/general/e_nofoto.jpg'}
                title={team.teamName}
                subtitle={`${team.category} ${team.gender}`}
                width="250px"
                height="178px">
              </Card>
            </Link>
          );
        })}
      </TeamContainer>
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
