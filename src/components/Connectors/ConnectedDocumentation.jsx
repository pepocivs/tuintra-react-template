import { connect } from "react-redux";

import Documents from "components/Containers/DocumentationContainer";

/** ACTIONS */
import actionsDocuments from "../../redux/documents/actions";

/** SELECTORS */
import {
  getDocuments,
  getDocumentsLoading,
  getDocumentsReady,
  getDocumentsError,
  getDocumentsHasError
} from "../../redux/documents/selectors";

const mapStateToProps = (state, props) => ({
  documents: {
    data: getDocuments(state),
    loading: getDocumentsLoading(state),
    ready: getDocumentsReady(state),
    error: getDocumentsError(state),
    hasError: getDocumentsHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchDocuments: () => dispatch(actionsDocuments.fetchDocuments()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);