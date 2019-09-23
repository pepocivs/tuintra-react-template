import React from "react";

/** Custom components */
import Card from "components/Card/Card";

function NewContainer({selectedNew}) {
  return (
    <>
      <Card
        bgImage={selectedNew.image}
        title={selectedNew.title}
        subtitle={selectedNew.subtitle}
        width="100%"
        height="40vw">
      </Card>
      <div dangerouslySetInnerHTML={{__html: selectedNew.new}}></div>
    </>
  )
}


export default NewContainer;