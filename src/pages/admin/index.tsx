import { useEffect, useState } from 'react'
import Layout from '@/components/admin/layout'
import { GET_CATEGORIES, GET_TEST_URL } from '@/helpers/apicalls'

export const getServerSideProps = async(context: any) => {
  const categories = await GET_CATEGORIES();
  return {
    props: {
      data: categories
    } 
  }
}

export default function Dashboard({data}: any) {
  const [categories, setCategories] = useState<any>([]);
  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <>
      <Layout title="Admin | Dashboard">
        <h2>This is body of Admin</h2>
        {categories.length > 2 ? categories.map((category: any, index: number) => {
          return(
            <>
              <h1>{category?.name}</h1>
            </>
          );
        
        }) : <h1>NotFOund</h1>}
      </Layout>
    </>
  )
}

