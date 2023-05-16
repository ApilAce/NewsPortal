import WebsiteLayout from "@/components/web/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import np from "../../locales/np/common.json";

const Homepage = () => {
  const { locale } = useRouter();
  const t = locale === "np" ? np : en;
  return (
    <WebsiteLayout>
      <div>{t.home}</div>
      <Link href={"/about/"}>{t.about}</Link>
    </WebsiteLayout>
  );
};

export default Homepage;
