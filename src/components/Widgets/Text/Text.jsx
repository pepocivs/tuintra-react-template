import React from "react";
import styled from "styled-components";

const cleanString = (str) => str.replace(/'cd'/g, '"').replace(/'cs'/g, "'");

const HtmlPrint = styled.div`
  img {
    max-width: 100%;
  }
`;

function Text({widgetInfo}) {
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      <HtmlPrint dangerouslySetInnerHTML={{__html: cleanString(widgetInfo.content)}}></HtmlPrint>
    </>
  )
}

export default Text;
