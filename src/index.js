import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/userProvider";
import "./index.scss";
import { CategoriesContextProvider } from "./contexts/categoriesContextprovider";
import { CartContextProvider } from "./contexts/cardContextprovider";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CartContextProvider> */}
          {/* <CategoriesContextProvider> */}
          <App />
          {/* </CategoriesContextProvider> */}
          {/* </CartContextProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
