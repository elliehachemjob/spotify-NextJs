import type { NextPage } from "next";
import Login from "../components/Login";
import {
  SPOTIFY_ENDPOINT_AUTHORIZATION,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE_URI_PARAM,
} from "../constants/credential";
import useLogin from "../hooks/useLogin";
import { server } from "../config/index";

const Home: NextPage = ({ articles }: any) => {
  console.log(articles);
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

//static props = build time
// sever side on every request

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: { articles },
//   };
// };

//our own api made in pages/api folder

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: { articles },
  };
};
