import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import store from "redux/store";
import * as serviceWorker from "./serviceWorker";

/** Custom Components */
import ConnectedApp from "components/App/ConnectedApp";

WebFont.load({
  google: {
    families: ["Gayathri:100,400,700", "Acme"]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
