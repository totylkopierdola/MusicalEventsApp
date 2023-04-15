import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero magnam dolore quisquam
        obcaecati quasi, ducimus, dicta voluptas quis neque laudantium laborum dignissimos.
        Blanditiis excepturi id non quod, voluptatibus exercitationem?
      </p>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
