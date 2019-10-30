import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { reducers } from "./reducers/reducers";
import { Provider } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./languages/en.json";
import spanish from "./languages/es.json";
import german from "./languages/de.json";
import LanguageDetector from "i18next-browser-languagedetector";
import "./App.css";
import "./bootstrap.min.css";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    initImmediate: false,
    fallbackLng: "es",
    debug: true,
    resources: {
      en: { translation: english },
      es: { translation: spanish },
      de: { translation: german }
    },    
    interpolation: {
      escapeValue: false
    }
  });
  

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
