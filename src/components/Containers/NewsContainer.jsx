import React from "react";
import NewsList from "components/newsList/newsList";
import NewsHead from "components/newsHeader/newsHeader";
import styled from "styled-components";

const NewsContainerStyled = styled.div`
  position: sticky;
  margin: 300px auto 0 auto;
  background-color: white;
  padding-top: 20px;
  z-index: 4;
`;

function NewsContainer(props) {
  const nHighLightedNews = 3;
  const news = props.news.slice(nHighLightedNews);
  const highLightedNews = props.news.slice(0, nHighLightedNews);

  return (
    <>
      <NewsHead news={highLightedNews} />
      <NewsContainerStyled>
        <NewsList news={news} />
      </NewsContainerStyled>
    </>
  );
}

export default NewsContainer;