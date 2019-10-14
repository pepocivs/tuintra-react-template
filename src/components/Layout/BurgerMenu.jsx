import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Theme */
import theme from "../../theme/index";

/** Styles */
const MenuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    top: `calc((${theme.spacings.headerHeight} - 30px) / 2)`,
    right: '0px',
    transform: 'translate3d(-100%, 0px, 0px)'
  },
  bmBurgerBars: {
    background: theme.colors.white
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: theme.colors.light
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: theme.colors.dark,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: theme.colors.dark,
  },
  bmItemList: {
    color: theme.colors.light,
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const StyledLink = styled(Link)`
	background-color: ${({selected}) => (selected) ? 'rgba(255,255,255,0.2)' : 'initial'};
	li {
		color: ${({selected, theme}) => (selected) ? theme.colors.light : theme.colors.white};
	}
`;

function BurgerMenu({ menu, page, clubInfoDomain }) {
  return (
    <div>
      <Menu styles={MenuStyles}>
        {
          menu.map(menuItem => {
            if(!menuItem.visible) return null;
            return (menuItem.file !== "intranet")
              ? (
                <StyledLink selected={(page === menuItem.file)} key={menuItem._id} to={`/${menuItem.file}`}>
                  {menuItem.title}
                </StyledLink>
              )
              : (
              <a key={menuItem._id} target="_blank" rel="noopener noreferrer" href={`${clubInfoDomain.tuintraDomain}/intranet`}>
                {menuItem.title}
              </a>
              );
          })
        }
      </Menu>
    </div>
  )
}

export default BurgerMenu;
