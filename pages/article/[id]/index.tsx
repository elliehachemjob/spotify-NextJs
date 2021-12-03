import { server } from "../../../config";
import Link from "next/link";

const article = ({ article }: any) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article: any) => article.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article;

//old data to read later

// import { useRouter } from "next/router";

// export default function article({ article }: any) {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <div>
//       <div>This Component is rendered using serverside props</div>
//       Post: {article.title}
//     </div>
//   );
// }

// //server side way
// // export const getServerSideProps = async (context: any) => {
// //   const res = await fetch(
// //     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// //   );
// //   const article = await res.json();

// //   return {
// //     props: {
// //       article,
// //     },
// //   };
// // };

// //static props way

// export const getStaticProps = async (context: any) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// //since it is dymanci we need getStaticPath function to return

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();

//   const ids = articles.map((article: any) => article.id);
//   const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false, //returns 404 when data is not found
//   };
// };
