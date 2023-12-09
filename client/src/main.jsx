
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { DashboardContollerProvider } from "@/context";
import "../css/tailwind.css"
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

const clientId="536952314281-18jul72u7q9030uc011af20uin0ib0nk.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider
    clientId={clientId}
  >
  <AccountProvider>
  <BrowserRouter>
    <ThemeProvider>
      <DashboardContollerProvider>
        <App />
      </DashboardContollerProvider>
    </ThemeProvider>
  </BrowserRouter>
  </AccountProvider>
  </GoogleOAuthProvider>
);
