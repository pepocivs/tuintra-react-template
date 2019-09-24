import React from "react";

/** Custom components */
import Title from "components/UI/Title/Title";

function HistoryContainer({history}) {
  return (
    <>
      <Title shadow={history.title}>{history.title}</Title>
      <div dangerouslySetInnerHTML={{__html: history.content}}></div>
    </>
  )
}

export default HistoryContainer;