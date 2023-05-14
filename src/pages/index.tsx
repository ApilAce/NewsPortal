import Head from "next/head";
import Homepage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>News Portal</title>
        <meta name="description" content="News Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}
