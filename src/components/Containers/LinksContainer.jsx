import React from "react";
import styled from "styled-components";

/** Custom Component */
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";

const LinkContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 100px);
`;

function LinksContainer({links}) {
  return (
    <>
      <Title shadow="Enlaces">Enlaces</Title>
        {links.map(categoryLink => (
          <div key={categoryLink.categoryId}>
            <h3>{categoryLink.categoryName}</h3>
            <LinkContainer>
              {categoryLink.links.map(link => (
                <a key={link.linkName} href={`http://${link.url}`} rel="noopener noreferrer" target="_blank">
                  <Card
                    outerText={link.linkName}
                    bgImage={link.image}
                    width="100px"
                    height="100px"
                    shadow={false}>
                  </Card>
                </a>
              ))}
            </LinkContainer>
          </div>
        ))}
    </>
  )
}

export default LinksContainer;