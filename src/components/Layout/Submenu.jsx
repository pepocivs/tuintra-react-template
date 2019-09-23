/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/** Custom components */
import Card from "components/Card/Card";

const SubmenuContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
`;

function Submenu(props) {
  const subsection = props.match.params.subsection;
  const { menu } = props;
  const selectedMenu = menu.find(menuItem => menuItem.file === subsection);
  const subMenu = (selectedMenu) ? selectedMenu.children : [];
    return (
      <SubmenuContainer>
        {subMenu.map(menu => (
          <Link key={menu._id} to={`/${subsection}/${menu.file}`}>
            <Card
              title=""
              subtitle={menu.title}
              bgImage={`/assets/icons/${menu.link}.png`}
              width="100px"
              height="100px">
            </Card>
          </Link>
        ))}
      </SubmenuContainer>
    )
  }


export default Submenu;

