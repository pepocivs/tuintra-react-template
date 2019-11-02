import React, { useEffect } from "react";
import styled from "styled-components";

/** Custom Components */
import Loading from "components/Containers/Loading";
import Title from "components/UI/Title/Title";
import Card from "components/UI/Card/Card";
import Alert from "components/UI/Alert/Alert";

const DocumentContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: space-between;
`;

function DocumentationContainer({ fetchDocuments, documents }) {
  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);
  if (!documents.ready) return <Loading />;
  return (
    <>
      <Title shadow="Documentación Oficial">Documentación</Title>
      {((documents.data.code && documents.data.code === 404) || documents.data.length === 0) 
        ? <Alert icon="info" iconColor="#aec6cf" msg="No existe documentación para mostrar" />
        : <DocumentContainer>
          {documents.data.map(document => {
            return (
              <a key={document.link} target="_blank" rel="noopener noreferrer" href={`http://${document.link}`}>
                <Card
                  bgImage={`/assets/extensions/${document.extension}.png`}
                  outerText={document.filename}
                  width="100px"
                  height="100px"
                  shadow={false}>
                </Card>
              </a>
            );
          })}
        </DocumentContainer>
      }
    </>
  )
}

export default DocumentationContainer;