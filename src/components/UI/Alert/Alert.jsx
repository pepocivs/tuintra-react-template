import React from "react";
import styled from "styled-components";

/** Custom components */
import SvgIcon from "components/UI/SvgIcon/SvgIcon";

const AlertBox = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  background-color: ${({theme}) => theme.colors.light};
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  div, svg {
    justify-self: center;
    align-self: center;
  }
`;

function Alert({msg, icon, iconColor}) {
  return (
    <AlertBox>
      <SvgIcon name={icon} color={iconColor} />
      <div>{msg}</div>
    </AlertBox>
  )
}

export default Alert
