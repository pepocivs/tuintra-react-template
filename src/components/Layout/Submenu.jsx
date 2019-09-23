/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
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

class Submenu extends Component {
  constructor(props) {
    super();
    this.menu = props.menu;
    this.subMenu = [];
  }

  componentWillMount() {
    this.parent = location.pathname.split('/')[1];
    const selectedMenu = this.menu.find(menuItem => menuItem.file === this.parent);
    this.subMenu = (selectedMenu) ? selectedMenu.children : [];
  }

  render() {
    return (
      <SubmenuContainer>
        {this.subMenu.map(menu => (
          <Link key={menu._id} to={`/${this.parent}${(this.parent) ? '/' : ''}${menu.file}`}>
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
}

export default Submenu;

