import { useEffect, useState } from "react";
import { GET_CATEGORIES, GET_TEST_URL } from "@/helpers/apicalls";
import AdminLayout from "@/components/admin/layout";

// export const getServerSideProps = async (context: any) => {
//   const categories = await GET_CATEGORIES();
//   return {
//     props: {
//       categories: categories,
//     },
//   };
// };

export default function Dashboard({ categories }: any) {
  return (
    <>
      <AdminLayout title="Admin | Dashboard">
        <h2>This is body of Admin</h2>
        {/* {categories.length > 2 ? (
          categories.map((category: any, index: number) => {
            return (
              <>
                <h3 key={index}>{category?.name}</h3>
              </>
            );
          })
        ) : (
          <h1>NotFOund</h1>
        )} */}
      </AdminLayout>
    </>
  );
}
