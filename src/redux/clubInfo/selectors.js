import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getClubData = state => get(state, "clubData.data");
const getClubDataLoading = state => get(state, "clubData.loading");
const getClubDataReady = state => get(state, "clubData.ready");
const getClubDataError = state => get(state, "clubData.error");

const getClubDataHasError = createSelector(
  getClubDataError,
  error => !isEmpty(error)
);

const getMenu = createSelector(
  getClubData,
  data => get(data, "menu", [])
);

export {
  getClubData,
  getMenu,
  getClubDataLoading,
  getClubDataReady,
  getClubDataError,
  getClubDataHasError
};

