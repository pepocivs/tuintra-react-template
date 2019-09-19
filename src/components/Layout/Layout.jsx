import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";

/** Style Imports*/
import styled from "styled-components";
import { Media } from "react-breakpoints";
import GlobalStyle from "./GlobalStyle";

/** Custom Components*/
import Menu from 'components/Layout/Menu';
import Footer from 'components/Layout/Footer';

/** Containers */
import NotFound from 'components/Containers/NotFound';
import HomeContainer from 'components/Containers/HomeContainer';
import TeamsContainer from 'components/Containers/TeamsContainer';
import TeamContainer from 'components/Containers/TeamContainer';
import NewsContainer from 'components/Containers/NewsContainer';

import emulatedState from 'emulatedState';

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

function Layout(stateProps) {
  stateProps = emulatedState;
  if (stateProps.clubInfo && Object.keys(stateProps.clubInfo).length > 0) {
    return (
      <Router>
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
                  <Menu clubInfo={stateProps.clubInfo} />
                ) : (
                  <h1>Mobile stuff {breakpoints.mobileLandscape}</h1>
                )
              }
            </Media>
          </HeaderSection>
          <MainSection>
            <div className="page-body">
              <Route exact path="/equipos" component={() => <TeamsContainer {...stateProps} />} />
              <Route path="/equipos/:id" component={() => <TeamContainer {...stateProps} />} />
              <Route path="/noticias/:id?" component={() => <NewsContainer {...stateProps} />} />
              <Route exact path="/inicio" component={() => <HomeContainer {...stateProps} />} />
              <Route exact path="/" component={() => <HomeContainer {...stateProps} />} />
            </div>
          </MainSection>
          <FooterSection>
            <Footer {...stateProps} />
          </FooterSection>
        </MainContainer>
      </Router>
    );
  }
  return (<NotFound title="Error" subtitle="No se ha podido conectar con la BBDD" />);
}
export default Layout;