import types from "./types";

const fetchHistoric = () => ({
  type: types.FETCH_HISTORIC
});

const fetchHistoricSuccess = data => ({
  type: types.FETCH_HISTORIC_SUCCESS,
  payload: { data }
});

const fetchHistoricFailure = error => ({
  type: types.FETCH_HISTORIC_FAILURE,
  payload: { error }
});

const actions = {
  fetchHistoric,
  fetchHistoricSuccess,
  fetchHistoricFailure
};

export default actions;
