import React from "react";

import Birthday from "./Birthday/Birthday";

function GetWidget({widget}) {
  if (!widget) return null;
  return (widget.type === 'birthday') 
    ? (<Birthday content={widget.content.content} />)
    : (<div>{widget.type}</div>)
}

export default GetWidget;
