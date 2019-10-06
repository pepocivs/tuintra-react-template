import types from "./types";

const fetchCalendar = competitionId => ({
  type: types.FETCH_CALENDAR,
  payload: { competitionId }
});

const fetchCalendarSuccess = data => ({
  type: types.FETCH_CALENDAR_SUCCESS,
  payload: { data }
});

const fetchCalendarFailure = error => ({
  type: types.FETCH_CALENDAR_FAILURE,
  payload: { error }
});

const actions = {
  fetchCalendar,
  fetchCalendarSuccess,
  fetchCalendarFailure
};

export default actions;
