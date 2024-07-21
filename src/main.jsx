import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; //UpperCamelCase for components
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="alejandrogarcia.eu.auth0.com"
      clientId="J9Ac2zyHPIRMFUqkVkCddqmH0uka6oWs"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
