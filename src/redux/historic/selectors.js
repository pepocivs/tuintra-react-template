import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
import { sortBy } from "../../helpers/sortBy";

const sortHistoricDetail = (historic) => 
  historic.map(detail => {
    sortBy(detail.historic, 'sportId');
    sortBy(detail.historic, 'priority');
    return detail;
  });


const sortHistoric = (historic) => {
  if (Object.keys(historic).length === 0) return {};
  sortBy(historic, 'genderId');
  sortBy(historic, 'categoryId');
  sortHistoricDetail(historic);
  return historic;
}

const getHistoric = state => sortHistoric(get(state, "historic.data"));
const getHistoricLoading = state => get(state, "historic.loading");
const getHistoricReady = state => get(state, "historic.ready");
const getHistoricError = state => get(state, "historic.error");
const getHistoricHasError = createSelector(
  getHistoricError,
  error => !isEmpty(error)
);


export {
  getHistoric,
  getHistoricLoading,
  getHistoricReady,
  getHistoricError,
  getHistoricHasError
};
