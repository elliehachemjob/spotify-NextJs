import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      Times logged in :
      <Component {...pageProps} />{" "}
    </div>
  );
}

export default MyApp;
