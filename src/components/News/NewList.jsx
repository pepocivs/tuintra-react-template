import React from "react";
import styled from "styled-components";

/** Custom components */
import NewsRegular from "components/News/NewsRegular";
import NewsHeader from "components/News/NewsHeader";

const NewsContainerStyled = styled.div`
  position: sticky;
  margin: ${({isEmpty}) => (isEmpty) ? '500px' : '300px'} auto 0 auto;
  background-color: white;
  padding-top: 20px;
  z-index: 4;
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    margin: 50px auto;
    padding-top: 0px;
    position: initial;
  }
`;

function NewList({highLightedNews, regularNews, prefix}) {
  return (
    <>
      <NewsHeader news={highLightedNews} />
      <NewsContainerStyled isEmpty={(regularNews.length === 0)}>
        <NewsRegular news={regularNews} prefix={prefix} />
      </NewsContainerStyled>
    </>
  )
}

export default NewList;
