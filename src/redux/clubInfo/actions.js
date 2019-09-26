import types from "./types";

const fetchClubData = () => ({
  type: types.FETCH_CLUBDATA
});

const fetchClubDataSuccess = data => ({
  type: types.FETCH_CLUBDATA_SUCCESS,
  payload: { data }
});

const fetchClubDataFailure = error => ({
  type: types.FETCH_CLUBDATA_FAILURE,
  payload: { error }
});

const actions = {
  fetchClubData,
  fetchClubDataSuccess,
  fetchClubDataFailure
};

export default actions;
