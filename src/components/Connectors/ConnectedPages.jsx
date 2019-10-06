import { connect } from "react-redux";

import Pages from "components/Containers/PagesContainer";

/** ACTIONS */
import actionsPages from "../../redux/pages/actions";

/** SELECTORS */
import {
  getPages,
  getPagesLoading,
  getPagesReady,
  getPagesError,
  getPagesHasError
} from "../../redux/pages/selectors";


const mapStateToProps = (state, props) => ({
  pages: {
    data: getPages(state),
    loading: getPagesLoading(state),
    ready: getPagesReady(state),
    error: getPagesError(state),
    hasError: getPagesHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchPages: pageId => dispatch(actionsPages.fetchPages(pageId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);