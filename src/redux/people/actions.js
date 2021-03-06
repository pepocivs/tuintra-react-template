import types from "./types";

const fetchPeople = (params) => ({
  type: types.FETCH_PEOPLE,
  payload: { params }
});

const fetchPeopleSuccess = data => ({
  type: types.FETCH_PEOPLE_SUCCESS,
  payload: { data }
});

const fetchPeopleFailure = error => ({
  type: types.FETCH_PEOPLE_FAILURE,
  payload: { error }
});

const actions = {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleFailure
};

export default actions;
