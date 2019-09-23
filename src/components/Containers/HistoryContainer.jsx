import React from "react";

function HistoryContainer({history}) {
  return (
    <>
      <h1>{history.title}</h1>
      <div dangerouslySetInnerHTML={{__html: history.content}}></div>
    </>
  )
}

export default HistoryContainer;