import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";
import { Media } from "react-breakpoints";

/** Helpers */
import breakpoints from "helpers/breakpoints";

/** Custom Theme */
import theme from "theme";

/** Custom Layout */

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                <h1>Desktop</h1>
              ) : (
                <h1>Mobile</h1>
              )
            }
          </Media>
          
        </ReactBreakpoints>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
