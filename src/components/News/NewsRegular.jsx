import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/** Styles */
const NewContainer = styled(Link)`
  display: grid;
  grid-template-areas: "summary picture";
  grid-template-columns: 1fr 250px;
  grid-gap: 10px;
  margin: 20px 0px;
  padding: 10px 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr 100px;
  }
`;

const NewContent = styled.div`
  grid-area: summary;
  margin-right: 30px;
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  grid-area: picture;
  width: 250px;
  height: 200px;
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 100px;
    height: 80px;
  }
`;

const NewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: auto;
  transition: opacity 2.4s ease-in;
  box-sizing: inherit;
`;

function NewsRegular({ news, prefix }) {
  return (
    <>
      {news.map(article => {
        return (
          <NewContainer key={article._id} to={`${prefix}${article.slug}`}>
            <NewContent>
              <h2>{article.title}</h2>
              <p>{article.subtitle}</p>
            </NewContent>
            <ImageContainer>
              <NewImage src={ article.image } alt={article.title} />
            </ImageContainer>
          </NewContainer>
        );
      })}
    </>
  );
}

export default NewsRegular;