import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Meta from "../components/Meta";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      User logged times
      <Meta />
      {/* <Nav /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
