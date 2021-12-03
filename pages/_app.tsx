import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Meta from "../components/Meta";
import { wrapper } from "../redux/store";
import { connect } from "react-redux";

function MyApp({ Component, pageProps, loggedTimes }: any) {
  return (
    <div>
      User logged times {loggedTimes}
      <Meta />
      {/* <Nav /> */}
      <Component {...pageProps} />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { status: state.user.status, loggedTimes: state.auth.loggedTimes };
};

export default wrapper.withRedux(connect(mapStateToProps)(MyApp));
