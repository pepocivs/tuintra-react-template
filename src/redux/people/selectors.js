import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getDirectors = (people) => {
  return (people.length) ? people.filter(person => person.directorData) : people;
}

const getPeople = state => get(state, "people.data");
const getPeopleLoading = state => get(state, "people.loading");
const getPeopleReady = state => get(state, "people.ready");
const getPeopleError = state => get(state, "people.error");
const getPeopleHasError = createSelector(
  getPeopleError,
  error => !isEmpty(error)
);
const getDirective = createSelector(
  getPeople,
  data => getDirectors(data)
);


export {
  getPeople,
  getDirective,
  getPeopleLoading,
  getPeopleReady,
  getPeopleError,
  getPeopleHasError
};
