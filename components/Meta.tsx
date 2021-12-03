import Head from "next/head";

export default function Meta({ title, keywords, description }: any) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Ellie website",
  keywords: "web development, programming",
  description: "One Of Best Website that include everything",
};
