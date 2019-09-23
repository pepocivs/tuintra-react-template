import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";

/** Style Imports*/
import styled from "styled-components";
import { Media } from "react-breakpoints";
import GlobalStyle from "./GlobalStyle";

/** Custom Components*/
import Menu from 'components/Layout/Menu';
import Footer from 'components/Layout/Footer';
import SubSection from 'components/Layout/SubSection';

/** Containers */
import NotFound from 'components/Containers/NotFound';

/** Helpers */
import getComponentByRoute from "helpers/componentByRoutes";

/** Styles */
const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "left content right"
    "footer footer footer";
  grid-template-columns: ${({theme}) => `${theme.spacings.layoutMargin} 1fr ${theme.spacings.layoutMargin}`};
  grid-template-rows: ${({theme}) => theme.spacings.headerHeight} 1fr auto;
  grid-gap: 10px;
  height: 100vh;
  @media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: ${({theme}) => `${theme.spacings.layoutSmallMargin} 1fr ${theme.spacings.layoutSmallMargin}`};
  }
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 0px 1fr 0px;
  }
`;
const HeaderSection = styled.header`
  grid-area: header;
`;
const MainSection = styled.main`
  grid-area: content;
`;
const FooterSection = styled.footer`
  grid-area: footer;
`;

function Layout({stateProps}) {
  if (stateProps.clubInfo && Object.keys(stateProps.clubInfo).length > 0) {
    return (
      <>
        <GlobalStyle />
        <Helmet>
          <link rel="shortcut icon" href={stateProps.clubInfo.options.favicon || './favicon.ico'} />
          <meta name="theme-color" content={stateProps.clubInfo.options.principal_color_web} />
          <title>{stateProps.clubInfo.clubName}</title>
        </Helmet>
        <MainContainer>
          <HeaderSection>
            <Media>
              {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] >= breakpoints.tablet ? (
                  <Menu clubInfo={stateProps.clubInfo} menu={stateProps.menu}/>
                ) : (
                  <h1>Mobile stuff {breakpoints.mobileLandscape}</h1>
                )
              }
            </Media>
          </HeaderSection>
          <MainSection>
            <Route path="/:subsection" component={(props) =>  <SubSection menu={stateProps.menu} {...props} {...stateProps}/>}></Route>
            <Switch>
              {
                stateProps.menu.map(menuItem => {
                  const Component = getComponentByRoute(menuItem.file)
                  return <Route key={menuItem._id} path={`/${menuItem.file}`} component={() => <Component {...stateProps} />} />
                })
              }
            </Switch>
          </MainSection>
          <FooterSection>
            <Footer {...stateProps} />
          </FooterSection>
        </MainContainer>
      </>
    );
  }
  return (<NotFound title="Error" subtitle="No se ha podido conectar con la BBDD" />);
}
export default Layout;