import React from "react";
import styled from "styled-components";
import Moment from 'react-moment';

/** Custom components */
import Card from "components/UI/Card/Card";
import NotFound from "components/Containers/NotFound";

const Author = styled.div`
  text-align: right;
  color: ${({theme}) => theme.colors.darkGrey};
`;

const NewBody = styled.div`
  font-family: arial;
  text-align: justify;
  font-size: 18px;
`;

const decode = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  }).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}

function New({ selectedNew }) {
  if (!selectedNew) return (<NotFound />);
  return (
    <>
      <Card
        bgImage={selectedNew.image}
        title={selectedNew.title}
        outerText={selectedNew.subtitle}
        width="100%"
        height="40vw">
      </Card>
      <NewBody dangerouslySetInnerHTML={{__html: decode(selectedNew.new)}}></NewBody>
      <Author>
        {selectedNew.author} - <Moment format="DD/MM/YYYY" date={selectedNew.date}/>
      </Author>
    </>
  )
}


export default New;