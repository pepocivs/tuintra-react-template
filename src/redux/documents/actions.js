import types from "./types";

const fetchDocuments = () => ({
  type: types.FETCH_DOCUMENTS
});

const fetchDocumentsSuccess = data => ({
  type: types.FETCH_DOCUMENTS_SUCCESS,
  payload: { data }
});

const fetchDocumentsFailure = error => ({
  type: types.FETCH_DOCUMENTS_FAILURE,
  payload: { error }
});

const actions = {
  fetchDocuments,
  fetchDocumentsSuccess,
  fetchDocumentsFailure
};

export default actions;
