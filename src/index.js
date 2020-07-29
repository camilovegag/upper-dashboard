import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <Suspense fallback="Cargando...">
        <App />
      </Suspense>
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
