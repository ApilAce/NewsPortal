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
        <h2>This is Dashboard</h2>
      </AdminLayout>
    </>
  );
}
