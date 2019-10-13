import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Helpers */
import clubInfoDomain from "helpers/clubInfo";

/** Styles */
const MenuNav = styled.div`
	height: ${({theme}) => theme.spacings.headerHeight};
	background-color: ${({theme}) => theme.clubOptions.principal_color_web};
	position: fixed;
	width: 100%;
	z-index: 20;
`;
const Row = styled.div`
	display: grid;
	grid-template-areas: ". logo menu .";
	grid-template-columns: ${({theme}) => `${theme.spacings.layoutMargin} ${theme.spacings.logoWidth} 1fr ${theme.spacings.layoutMargin}`};
	grid-template-rows: ${({theme}) => theme.spacings.headerHeight};
	grid-gap: 10px;
	overflow: hidden;
	@media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: ${({theme}) => `${theme.spacings.layoutSmallMargin} ${theme.spacings.logoWidth} 1fr ${theme.spacings.layoutSmallMargin}`};
  }
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 0px ${({theme}) => theme.spacings.logoWidth} 1fr 0px;
  }
`;
const Logo = styled.img`
	grid-area: logo;
	width: ${({theme}) => theme.spacings.logoWidth};
	align-self: center;
`;

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
		color: #FFFFFF;
		text-align: center;
	}
`;
	
function Menu({ clubInfo, menu }) {
	return (
		<MenuNav>
			<Row>
				<Logo src={clubInfo.options.clubs_logo} />
				<NavHolder>
					<ul>
						{
							menu.map(menuItem => {
								if(!menuItem.visible) return null;
								return (menuItem.file !== "intranet")
									? (
										<Link key={menuItem._id} to={`/${menuItem.file}`}>
											<li>{menuItem.title}</li>
										</Link>
									)
									: (
									<a key={menuItem._id} target="_blank" without rel="noopener noreferrer" href={`${clubInfoDomain.tuintraDomain}/intranet`}>
										<li>{menuItem.title}</li>
									</a>
									);
							})
						}
					</ul>
				</NavHolder>
			</Row>
		</MenuNav>
	)
}

export default Menu;
