import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./index.css";
import Dashboard from "./Dashboard";
import Bots from "./Bots";
import OrderHistory from "./OrderHistory";
import Settings from "./Settings";
import reportWebVitals from "./reportWebVitals";

const defaultLang = localStorage.getItem("lang") || "en";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider
      locale={defaultLang}
      messages={require(`./locale/${defaultLang}.json`)}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
