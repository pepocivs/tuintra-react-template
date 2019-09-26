import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getClubData = state => get(state, "clubData.data");
const getClubDataLoading = state => get(state, "clubData.loading");
const getClubDataError = state => get(state, "clubData.error");

const getClubDataHasError = createSelector(
  getClubDataError,
  error => !isEmpty(error)
);

export {
  getClubData,
  getClubDataLoading,
  getClubDataError,
  getClubDataHasError
};
