import WebsiteLayout from "@/components/web/layout";
import en from "../../locales/en/common.json";
import np from "../../locales/np/common.json";
import { useRouter } from "next/router";
import Head from "next/head";

const About = () => {
  const { locale } = useRouter();
  const t = locale === "np" ? np : en;

  return (
    <WebsiteLayout>
      <Head>
        <title>News Portal | About Us</title>
        <meta name="description" content="News Portal About Us" />
      </Head>
      {t.about}
    </WebsiteLayout>
  );
};

export default About;
