import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";
import ReactGA from "react-ga";

/** Helpers */
import breakpoints from "helpers/breakpoints";

/** Custom Theme */
import theme from "theme";

/** Custom Layout */
import Layout from "components/Layout/Layout";
import Loading from 'components/Containers/Loading';

function App(props) {
  const { fetchClubData, fetchLinks, clubInfo } = props;
  useEffect(() => {
    fetchClubData();
    fetchLinks();
  }, [fetchClubData, fetchLinks]);
  if (!clubInfo.ready) {
    return (
      <Loading 
        color="#f28c12"
        height="0px"
        shield="/logo.png"
        />
    );
  }
  ReactGA.initialize(clubInfo.data.analyticsCode);
  return (
    <BrowserRouter>
      <ThemeProvider theme={{...theme, clubOptions: clubInfo.data.options}}>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout stateProps={props}/>
        </ReactBreakpoints>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
