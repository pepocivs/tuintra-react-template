import React from "react";
import NewList from "components/News/NewList";
import New from "components/News/New";

function NewsContainer({match, news, selectedNew}) {
  const nHighLightedNews = 3;
  const regularNews = news.slice(nHighLightedNews);
  const highLightedNews = news.slice(0, nHighLightedNews);
  const slug = match.params.slug;
  return (!!slug)
    ? <New selectedNew={selectedNew} />
    : <NewList highLightedNews={highLightedNews} regularNews={regularNews} />;
}

export default NewsContainer;