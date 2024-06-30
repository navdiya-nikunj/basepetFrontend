import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import Router from "./Router.jsx";
import { AuthKitProvider } from "@farcaster/auth-kit";
const config = {
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  domain: "example.com",
  siweUri: "http://localhost:5173/",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthKitProvider>
      <Router>
        <App />
      </Router>
    </AuthKitProvider>
  </React.StrictMode>
);
