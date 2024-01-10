import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-tye2gwc6gzgtkl5j.us.auth0.com"
     clientId="Iw8lvRvV0LGexPaXz18ZyO8rfDwiV4UQ"
     authorizationParams={{
      redirect_uri: "https://pg-locator-production-ready.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
