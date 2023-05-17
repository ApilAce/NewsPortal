import Head from "next/head";
import Header from "./header";
import Navbar from "./navbar";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const WebsiteLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>News Portal</title>
        <meta name="description" content="News Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <Navbar />
        <main>{children}</main>
      </>
    </>
  );
};

export default WebsiteLayout;
