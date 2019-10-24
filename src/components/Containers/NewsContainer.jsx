import React, { useEffect } from "react";

/** Custom components */
import Loading from "components/Containers/Loading";
import NewList from "components/News/NewList";
import New from "components/News/New";

function NewsContainer({match, fetchNews, news = []}) {
  const newSlug = (match.params.slug) ? `/${match.params.id}/${match.params.lang}/${match.params.slug}` : null;
  useEffect(() => {
    fetchNews(newSlug);
  }, [fetchNews, newSlug]);
  if (!news.ready) return <Loading />;

  const nHighLightedNews = 3;
  const regularNews = news.data.slice(nHighLightedNews);
  const highLightedNews = news.data.slice(0, nHighLightedNews);

  return (!!newSlug)
    ? <New selectedNew={news.data[0]} />
    : <NewList highLightedNews={highLightedNews} regularNews={regularNews} prefix={match.url} />;
}

export default NewsContainer;