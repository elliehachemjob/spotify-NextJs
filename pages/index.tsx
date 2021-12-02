import type { NextPage } from "next";
import Login from "../components/Login";
import {
  SPOTIFY_ENDPOINT_AUTHORIZATION,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE_URI_PARAM,
} from "../constants/credential";
import useLogin from "../hooks/useLogin";

const Home: NextPage = () => {
  const [token, setToken] = useLogin("accessToken"); //for login

  return (
    <Login
      SPOTIFY_ENDPOINT_AUTHORIZATION={SPOTIFY_ENDPOINT_AUTHORIZATION}
      CLIENT_ID={CLIENT_ID}
      REDIRECT_URI={REDIRECT_URI}
      SCOPE_URI_PARAM={SCOPE_URI_PARAM}
    />
  );
};

export default Home;
