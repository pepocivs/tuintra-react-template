import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import * as serviceWorker from "./serviceWorker";

/** Custom Components */
import App from "components/App/App";

WebFont.load({
  google: {
    families: ["Gayathri:100,400,700"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
