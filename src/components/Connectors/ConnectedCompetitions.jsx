import { connect } from "react-redux";

import Competitions from "components/Containers/CompetitionsContainer";

/** ACTIONS */
import actionsCompetitions from "../../redux/competitions/actions";
import actionsCalendar from "../../redux/calendar/actions";
import actionsStanding from "../../redux/standing/actions";

/** SELECTORS */
import {
  getOwnCompetitions,
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

/** Formatters */
import { getGroups } from "../../redux/calendar/formatter";


const mapStateToProps = (state, props) => ({
  competitions: {
    data: getOwnCompetitions(state),
    loading: getCompetitionsLoading(state),
    ready: getCompetitionsReady(state),
    error: getCompetitionsError(state),
    hasError: getCompetitionsHasError(state)
  },
  calendar: {
    data: getGroups(getCalendar(state)),
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
  fetchCalendar: queryParams => dispatch(actionsCalendar.fetchCalendar(queryParams)),
  fetchStanding: competitionId => dispatch(actionsStanding.fetchStanding(competitionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Competitions);