import React from "react";
import styled from "styled-components";

/** Styles */
const NewContainer = styled.div`
  display: grid;
  grid-template-areas: "summary picture";
  grid-template-columns: 1fr 250px;
  grid-gap: 10px;
  margin: 20px 0px;
  padding: 10px 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
`;

const NewContent = styled.div`
  grid-area: summary;
  margin-right: 30px;
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0;
    border-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  grid-area: picture;
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