import React from "react";
import styled from "styled-components";

/** Custom components */
import Card from "components/UI/Card/Card";

const Author = styled.div`
  text-align: right;
  color: ${({theme}) => theme.colors.darkGrey};
`;

const decode = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  }).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}

function New({selectedNew}) {
  return (
    <>
      <Card
        bgImage={selectedNew.image}
        title={selectedNew.title}
        subtitle={selectedNew.subtitle}
        width="100%"
        height="40vw">
      </Card>
      <div dangerouslySetInnerHTML={{__html: decode(selectedNew.new)}}></div>
      <Author>
        {selectedNew.author} - {selectedNew.date}
      </Author>
    </>
  )
}


export default New;