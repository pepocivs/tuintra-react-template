import { connect } from "react-redux";

import Links from "components/Containers/LinksContainer";

/** SELECTORS */
import {
  getLinks,
  getLinksLoading,
  getLinksReady,
  getLinksError,
  getLinksHasError
} from "../../redux/links/selectors";


const mapStateToProps = (state, props) => ({
  links: {
    data: getLinks(state),
    loading: getLinksLoading(state),
    ready: getLinksReady(state),
    error: getLinksError(state),
    hasError: getLinksHasError(state)
  },
});

export default connect(
  mapStateToProps
)(Links);