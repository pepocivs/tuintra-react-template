import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";
import { sortByArray } from "../../helpers/sortBy";
import { slugify } from "../../helpers/slugify";

const sortHistoric = (historic) => {
  if (Object.keys(historic).length === 0) return {};
  const cleanedKeys = Object.keys(historic).map(key => {
    const slugged = slugify(key).split("-");
    return {
      keyName: key,
      category: slugged[0],
      gender: slugged[1],
    };
  });
  sortByArray(cleanedKeys, "gender", ["masculino", "femenino", "mixto"]);
  sortByArray(cleanedKeys, "category", ["senior", "juvenil", "cadete", "infantil", "benjamin", "papis", "mamis"]);
  return cleanedKeys.map(key => {
    return {
      categoryName: key.keyName,
      historic: historic[key.keyName]
    }
  });
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
