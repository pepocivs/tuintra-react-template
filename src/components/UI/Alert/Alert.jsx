import React from "react";
import styled from "styled-components";

/** Custom components */
import SvgIcon from "components/UI/SvgIcon/SvgIcon";

const AlertBox = styled.div`
  background-color: ${({theme}) => theme.colors.light};
  display: grid;
  grid-template-columns: 1fr 4fr;
  div, svg {
    justify-self: center;
    align-self: center;
  }
`;

function Alert({msg}) {
  return (
    <AlertBox>
      <SvgIcon name="info" color="#aec6cf" />
      <div>{msg}</div>
    </AlertBox>
  )
}

export default Alert
