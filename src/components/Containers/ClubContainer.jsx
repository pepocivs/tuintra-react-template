import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom components */
import Card from "components/Card/Card";

const SubmenuContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
`;

function ClubContainer({subMenu}) {
  return (
    <SubmenuContainer>
      {subMenu.map(menu => (
        <Link key={menu._id} to={`/club/${menu.file}`}>
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

export default ClubContainer;