import { GET_ACTIVE_ARTICLES } from "@/helpers/apicalls";
import Homepage from "./home";
import { NextPageContext } from "next";

export const getServerSideProps = async(context: NextPageContext) => {
  const articles = await GET_ACTIVE_ARTICLES();
  return  {
    props: {
      articles
    }
  }
}

export default function Home({articles}: any) {
  return <Homepage articles={articles} />;
}
