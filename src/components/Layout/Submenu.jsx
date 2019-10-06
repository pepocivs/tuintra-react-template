/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/** Custom components */
import Highlighted from "components/UI/Highlighted/Highlighted";

const SubmenuContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
`;

function Submenu({subMenu, subsection, page}) {  
    return (
      <SubmenuContainer>
        {subMenu.map(menu => (
          <Link key={menu._id} to={`/${subsection}/${menu.file}`}>
            <Highlighted selected={(page === menu.file)}>{menu.title}</Highlighted>
          </Link>
        ))}
      </SubmenuContainer>
    )
  }


export default Submenu;

