import WebsiteLayout from "@/components/web/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import np from "../../locales/np/common.json";
import Head from "next/head";

const Homepage = () => {
  const { locale } = useRouter();
  const t = locale === "np" ? np : en;
  return (
    <WebsiteLayout>
      <Head>
        <title>News Portal | Homepage</title>
        <meta name="description" content="News Portal Homepage" />
      </Head>
      <div>{t.home}</div>
      <Link href={"/about/"}>{t.about}</Link>
    </WebsiteLayout>
  );
};

export default Homepage;
