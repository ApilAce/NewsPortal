import WebsiteLayout from "@/components/web/layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import np from "../../locales/np/common.json";
import Hero from "@/sections/web/hero";
import Politics from "@/sections/web/politics";

const homeData = {
  leftData: [
    {
      image: "/images/dummy/suii.png",
      category: "Sports",
      title: "Cristiano Ronaldo is a free agent",
    },
    {
      image: "/images/dummy/obama.png",
      category: "Entertainment",
      title: "Obama says hello",
    },
  ],
  middleData: [
    {
      image: "/images/dummy/rabi.png",
      category: "Politics",
      title: "Rabi Lamichhane has left the position of home minister ",
    },
  ],
  rightData: [
    {
      image: "/images/dummy/prachanda.png",
      category: "Politics",
      title: "Prachanda is the new PM of Nepal",
    },
    {
      image: "/images/dummy/cricket.png",
      category: "Sports",
      title: "Nepal to play against South Africa",
    },
  ],
};

const Homepage = () => {
  const { locale } = useRouter();
  const t = locale === "np" ? np : en;
  return (
    <WebsiteLayout>
      <Head>
        <title>News Portal | Homepage</title>
        <meta name="description" content="News Portal Homepage" />
      </Head>
      <div>
        <Hero homeData={homeData} />
        <Politics />
      </div>
    </WebsiteLayout>
  );
};

export default Homepage;
