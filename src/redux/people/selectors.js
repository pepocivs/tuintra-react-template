import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
import { sortByArray } from "../../helpers/sortBy";

const getDirectors = (people) => {
  if (Object.keys(people).length === 0) return [];
  const filteredDirective = (people.length) ? people.filter(person => person.directorData) : people;
  const directive = filteredDirective.map(director => {
    return {...director, position: director.directorData.position}
  });
  const arraySort = ["President", "Vicepresident", "Secretari", "Tesorer", "Director", "DT", "Vocal"];
  return sortByArray(directive, "position", arraySort);
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
