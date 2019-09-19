import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Styles */
const MenuNav = styled.div`
	height: ${({theme}) => theme.spacings.headerHeight};
	background-color: ${({color}) => color};
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
	}
	li{
		height: 15pt;
		font-weight: bold;
		text-transform: uppercase;
	}
	li a{
		padding: 20px;
		text-decoration: none;
		color: #FFFFFF;
	}
`;
	
function Menu(props) {
	const { clubInfo } = props;

	return (
		<MenuNav color={clubInfo.options.principal_color_web}>
			<Row>
				<Logo src={clubInfo.options.clubs_logo} />
				<NavHolder>
					<ul>
						{
							clubInfo.menu.map(menuItem => {
								if(menuItem.visible && menuItem.father === "0")
									return <li key={menuItem._id}>
										<Link to={menuItem.file}>{menuItem.title}</Link>
									</li>
								return '';
							})
						}
					</ul>
				</NavHolder>
			</Row>
		</MenuNav>
	)
}

export default Menu;
