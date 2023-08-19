import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import { RecoilRoot } from "recoil";

const defaultLang = localStorage.getItem("lang") || "en";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider
      locale={defaultLang}
      messages={require(`./locale/${defaultLang}.json`)}
    >
      <BrowserRouter basename={"/"}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
