import React, {useEffect} from "react";
import styled from "styled-components";

const cleanString = (str) => str.replace(/'cd'/g, '"').replace(/'cs'/g, "'");
const getScript = (str) => str.split('<script>').pop().split('</script>')[0];

const HtmlPrint = styled.div`
  img {
    max-width: 100%;
  }
`;

function Text({widgetInfo}) {
  const html = cleanString(widgetInfo.content);
  const script = getScript(html);
  useEffect(() => {
    if (script.substr(0,1) !== '<') {
      // eslint-disable-next-line no-eval
      eval(script);
    }
  }, [script]);
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      <HtmlPrint dangerouslySetInnerHTML={{__html: html }}></HtmlPrint>
    </>
  )
}

export default Text;
