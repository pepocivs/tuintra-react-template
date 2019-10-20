import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


/** Styles */
const NavHolder = styled.div`
	grid-area: menu;
	align-self: center;
	ul{
		list-style: none;
		overflow: hidden;
		display: flex;
		margin: 0px;
		padding-inline-start: 0px;
	}
	a {
		display: flex;
		align-items: center;
		font-weight: bold;
		text-transform: uppercase;
		height: ${({theme}) => theme.spacings.headerHeight};
		cursor: pointer;
	}
	a li {
		padding: 0 20px;
		text-decoration: none;
		text-align: center;
	}
`;

const StyledLink = styled(Link)`
	background-color: ${({selected}) => (selected) ? 'rgba(255,255,255,0.2)' : 'initial'};
	li {
		color: ${({selected, theme}) => (selected) ? theme.colors.light : theme.colors.white};

	}
`;

function DesktopMenu({ menu, page, clubInfoDomain }) {
  return (
    <NavHolder>
      <ul>
        {
          menu.map(menuItem => {
            if(!menuItem.visible) return null;
            return (menuItem.file !== "intranet")
              ? (
                <StyledLink selected={(page === menuItem.file)} key={menuItem._id} to={`/${menuItem.file}`}>
                  <li>{menuItem.title}</li>
                </StyledLink>
              )
              : (
              <a key={menuItem._id} target="_blank" rel="noopener noreferrer" href={`https://${clubInfoDomain.tuintraDomain}/intranet`}>
                <li>{menuItem.title}</li>
              </a>
              );
          })
        }
      </ul>
    </NavHolder>
  )
}

export default DesktopMenu;
