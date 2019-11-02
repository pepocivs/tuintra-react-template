/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { withRouter } from "react-router"

/** Custom components */
import Loading from "components/Containers/Loading";
import Title from "components/UI/Title/Title";
import Alert from "components/UI/Alert/Alert";

function PageContainer({fetchPages, pages, match}) {
  const pageId = match.params.id || 1;
  useEffect(() => {
    fetchPages(pageId);
  }, [fetchPages, pageId]);
  if (!pages.ready) return <Loading />;
  return (
    <>
      <Title shadow={pages.data.title}>{pages.data.title}</Title>
      {(pages.data.content.length === 0)
        ? <Alert icon="info" iconColor="#aec6cf" msg="Contenido no disponible" />
        : <div dangerouslySetInnerHTML={{__html: pages.data.content}}></div>
      }
    </>
  )
}

export default withRouter(PageContainer);