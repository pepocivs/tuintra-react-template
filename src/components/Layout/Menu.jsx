import React from "react";
import styled from "styled-components";
import { Media } from "react-breakpoints";
import { withRouter } from "react-router";

/** Helpers */
import clubInfoDomain from "helpers/clubInfo";

/** MenuComponents */
import DesktopMenu from "./DesktopMenu";
import BurgerMenu from 'components/Layout/BurgerMenu';

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

function Menu({ clubInfo, menu }) {
	const pathName = document.location.pathname.split("/");
	const page = (document.location.pathname !== "/") ? pathName[1] : 'inicio';
	return (
		<MenuNav>
			<Row>
				<Logo src={clubInfo.options.clubs_logo} />
				<Media>
					{({ breakpoints, currentBreakpoint }) =>
						breakpoints[currentBreakpoint] >= breakpoints.tablet ? (
							<DesktopMenu page={page} menu={menu} clubInfoDomain={clubInfoDomain}/>
						) : (
							<BurgerMenu lubInfo={clubInfo} menu={menu} page={page} />
						)
					}
				</Media>
			</Row>
		</MenuNav>
	)
}

export default withRouter(Menu);
