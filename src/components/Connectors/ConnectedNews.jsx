import { connect } from "react-redux";

import News from "components/Containers/NewsContainer";

/** ACTIONS */
import actionsNews from "../../redux/news/actions";

/** SELECTORS */
import {
  getNews,
  getNewsLoading,
  getNewsReady,
  getNewsError,
  getNewsHasError
} from "../../redux/news/selectors";


const mapStateToProps = (state, props) => ({
  news: {
    data: getNews(state),
    loading: getNewsLoading(state),
    ready: getNewsReady(state),
    error: getNewsError(state),
    hasError: getNewsHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchNews: newSlug => dispatch(actionsNews.fetchNews(newSlug)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);