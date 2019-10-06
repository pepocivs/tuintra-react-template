import { connect } from "react-redux";

import Competitions from "components/Containers/CompetitionsContainer";

/** ACTIONS */
import actionsCompetitions from "../../redux/competitions/actions";
import actionsCalendar from "../../redux/calendar/actions";
import actionsStanding from "../../redux/standing/actions";

/** SELECTORS */
import {
  getCompetitions,
  getCompetitionsLoading,
  getCompetitionsReady,
  getCompetitionsError,
  getCompetitionsHasError
} from "../../redux/competitions/selectors";
import {
  getCalendar,
  getCalendarLoading,
  getCalendarReady,
  getCalendarError,
  getCalendarHasError
} from "../../redux/calendar/selectors";
import {
  getStanding,
  getStandingLoading,
  getStandingReady,
  getStandingError,
  getStandingHasError
} from "../../redux/standing/selectors";


const mapStateToProps = (state, props) => ({
  competitions: {
    data: getCompetitions(state),
    loading: getCompetitionsLoading(state),
    ready: getCompetitionsReady(state),
    error: getCompetitionsError(state),
    hasError: getCompetitionsHasError(state)
  },
  calendar: {
    data: getCalendar(state),
    loading: getCalendarLoading(state),
    ready: getCalendarReady(state),
    error: getCalendarError(state),
    hasError: getCalendarHasError(state)
  },
  standing: {
    data: getStanding(state),
    loading: getStandingLoading(state),
    ready: getStandingReady(state),
    error: getStandingError(state),
    hasError: getStandingHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchCompetitions: competitionId => dispatch(actionsCompetitions.fetchCompetitions(competitionId)),
  fetchCalendar: competitionId => dispatch(actionsCalendar.fetchCalendar(competitionId)),
  fetchStanding: competitionId => dispatch(actionsStanding.fetchStanding(competitionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Competitions);