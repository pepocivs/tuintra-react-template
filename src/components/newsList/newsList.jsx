import React from 'react';
import styled from "styled-components";

/** Styles */
const NewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  padding: 0px 20px;
`;

const NewContent = styled.div`
  margin-right: 30px;
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 250px;
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

function NewsList(props) {
  const { news } = props;
  return (
    <>
      {news.map(article => {
        return (
          <NewContainer key={article._id}>
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

export default NewsList;