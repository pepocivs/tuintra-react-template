import React, { useEffect } from "react";
import { connect } from "react-redux";

/** Custom components */
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";
import NewsHeader from "components/News/NewsHeader";

/** ACTIONS */
import actionsNews from "../../../redux/news/actions";

/** SELECTORS */
import {
  getNews,
  getNewsLoading,
  getNewsReady,
  getNewsError,
  getNewsHasError
} from "../../../redux/news/selectors";


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

function News({fetchNews, news}) {
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
  if (!news.ready) return <Loading />;
  if (news.data.length === 0) return <Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado notícias" />
  const highligtedNews = news.data.slice(0, 5);
  return (
    <NewsHeader news={highligtedNews} />
  )
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);