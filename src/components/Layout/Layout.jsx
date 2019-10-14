import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";

/** Style Imports*/
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

/** Custom Components*/
import Menu from 'components/Layout/Menu';
import TopFooter from 'components/Layout/Footer/TopFooter';
import BottomFooter from 'components/Layout/Footer/BottomFooter';
import SubSection from 'components/Layout/SubSection';

/** Containers */
import NotFound from 'components/Containers/NotFound';
import Loading from 'components/Containers/Loading';

/** Helpers */
import getComponentByRoute from "helpers/componentByRoutes";
import checkProperty from "helpers/checkProperty";

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
    grid-gap: 0px;
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
  const requiredProps = ['clubInfo', 'links'];
  if (checkProperty('ready', stateProps, requiredProps)) {
    const clubInfo = stateProps.clubInfo.data;
    const menu = stateProps.menu;
    const widgets = stateProps.widgets;
    const footerLinks = stateProps.links.data.footerLinks;
    const Home = getComponentByRoute('inicio');
    return (
      <>
        <GlobalStyle />
        <Helmet>
          <link rel="shortcut icon" href={clubInfo.options.favicon || './logo.png'} />
          <meta name="theme-color" content={clubInfo.options.principal_color_web} />
          <title>{clubInfo.clubName}</title>
        </Helmet>
        <MainContainer>
          <HeaderSection>
            <Menu clubInfo={clubInfo} menu={menu} />
          </HeaderSection>
          <MainSection>
            <Route path="/:subsection/:page?" component={SubSection} />
            <Switch>
              <Route exact path="/" component={Home} />
              {
                menu.map(menuItem => {
                  if (!menuItem.visible) return null;
                  const route = menuItem.file.split('/')[0];
                  const Component = getComponentByRoute(route);
                  return <Route key={menuItem._id} path={`/${route}/:id?/:lang?/:slug?`} component={Component} />
                })
              }
              <Route component={NotFound} />
            </Switch>
          </MainSection>
          <FooterSection>
            <TopFooter footerLinks={footerLinks} />
            <BottomFooter clubInfo={clubInfo} widgets={widgets} />
          </FooterSection>
        </MainContainer>
      </>
    );
  } else if (checkProperty('loading', stateProps, requiredProps)) {
    return (<Loading />);
  } else if (checkProperty('hasError', stateProps, requiredProps)) {
    return (<NotFound title="Error" subtitle="No se ha podido conectar con la BBDD" />);
  } else {
    return "";
  }
}
export default Layout;