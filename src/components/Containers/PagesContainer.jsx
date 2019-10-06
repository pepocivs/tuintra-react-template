/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { withRouter } from "react-router"

/** Custom components */
import Title from "components/UI/Title/Title";

function PageContainer({fetchPages, pages, match}) {
  const pageId = match.params.id || 1;
  useEffect(() => {
    fetchPages(pageId);
  }, [fetchPages]);
  if (!pages.ready) return null;
  return (
    <>
      <Title shadow={pages.data.title}>{pages.data.title}</Title>
      <div dangerouslySetInnerHTML={{__html: pages.data.content}}></div>
    </>
  )
}

export default withRouter(PageContainer);