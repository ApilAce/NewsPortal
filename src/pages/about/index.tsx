import WebsiteLayout from "@/components/web/layout";
import en from "../../locales/en/common.json";
import np from "../../locales/np/common.json";
import { useRouter } from "next/router";

const About = () => {
  const { locale } = useRouter();
  const t = locale === "np" ? np : en;

  return <WebsiteLayout>{t.about}</WebsiteLayout>;
};

export default About;
