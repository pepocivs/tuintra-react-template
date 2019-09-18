import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";

/** Helpers */
import breakpoints from "helpers/breakpoints";

/** Custom Theme */
import theme from "theme";

/** Custom Layout */
import Layout from "components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout />
        </ReactBreakpoints>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
