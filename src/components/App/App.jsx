import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";

/** Helpers */
import breakpoints from "helpers/breakpoints";
import emulatedState from 'emulatedState';

/** Custom Theme */
import theme from "theme";

/** Custom Layout */
import Layout from "components/Layout/Layout";

function App(props) {
  const { fetchClubData } = props;
  useEffect(() => {
    fetchClubData();
  }, [fetchClubData]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={{...theme, clubOptions: emulatedState.clubInfo.options}}>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout stateProps={emulatedState}/>
        </ReactBreakpoints>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
