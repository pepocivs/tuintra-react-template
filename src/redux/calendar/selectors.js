import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getCalendar = state => get(state, "calendar.data");
const getCalendarLoading = state => get(state, "calendar.loading");
const getCalendarReady = state => get(state, "calendar.ready");
const getCalendarError = state => get(state, "calendar.error");
const getCalendarHasError = createSelector(
  getCalendarError,
  error => !isEmpty(error)
);


export {
  getCalendar,
  getCalendarLoading,
  getCalendarReady,
  getCalendarError,
  getCalendarHasError
};
