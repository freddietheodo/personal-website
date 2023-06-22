import type { AppProps } from "next/app";
import React from "react";
import ReactDOM from "react-dom";
import "styles/global.css";
import "styles/stylesheet.css";
import { Intl } from "providers";

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  void import("@axe-core/react").then(({ default: reactAxe }) => {
    const ACCESSIBILITY_CHECK_DELAY = 1000;
    return reactAxe(React, ReactDOM, ACCESSIBILITY_CHECK_DELAY);
  });
}
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Intl defaultLocale="en">
      <Component {...pageProps} />
    </Intl>
  );
};

export default App;
