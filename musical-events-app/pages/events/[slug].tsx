import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import React from 'react';

const EventPage = () => {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <Layout>
      <h1>My event <strong>{router.query.slug}</strong></h1>
      <button onClick={() => router.push('/')}>Click</button>
    </Layout>
  );
};

export default EventPage;
