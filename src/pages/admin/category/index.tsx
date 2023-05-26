import AdminLayout from "@/components/admin/layout";
import { GET_CATEGORIES } from "@/helpers/apicalls";

export const getServerSideProps = async (context: any) => {
  const categories = await GET_CATEGORIES();
  return {
    props: {
      categories: categories,
    },
  };
};

export default function Dashboard({ categories }: any) {
  return (
    <>
      <AdminLayout title="Admin | Dashboard">
        <h2>This is Category Page</h2>

        {categories.length > 0
          ? categories.map((category: any, index: number) => {
              return <h2 key={index}>{category.name}</h2>;
            })
          : "No Categories"}
      </AdminLayout>
    </>
  );
}
