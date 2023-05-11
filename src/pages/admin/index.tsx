import { useEffect } from 'react'
import Layout from '@/components/admin/layout'
import { GET_TEST_URL } from '@/helpers/apicalls'
import { useRouter } from 'next/router';

export default function Dashboard() {
    useEffect(() => {
        test();
    }, []);

    const test = async() => {
        const data = await GET_TEST_URL();
    }
    
  return (
    <>
      <Layout title="Admin | Dashboard">
        <h2>This is body of Admin</h2>
      </Layout>
    </>
  )
}

