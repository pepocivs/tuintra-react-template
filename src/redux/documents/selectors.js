import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getDocuments = state => get(state, "documents.data");
const getDocumentsLoading = state => get(state, "documents.loading");
const getDocumentsReady = state => get(state, "documents.ready");
const getDocumentsError = state => get(state, "documents.error");
const getDocumentsHasError = createSelector(
  getDocumentsError,
  error => !isEmpty(error)
);


export {
  getDocuments,
  getDocumentsLoading,
  getDocumentsReady,
  getDocumentsError,
  getDocumentsHasError
};
