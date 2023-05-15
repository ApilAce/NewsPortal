import WebsiteLayout from "@/components/web/layout";
import Link from "next/link";

const Homepage = () => {
  return (
    <WebsiteLayout>
      <div>Homepage</div>
      <Link href={"/about/"}>About</Link>
    </WebsiteLayout>
  );
};

export default Homepage;
