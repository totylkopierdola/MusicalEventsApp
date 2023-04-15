import { useRouter } from 'next/router';
import React from 'react';

const EventPage = () => {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <>
      <div>My event <strong>{router.query.slug}</strong></div>
      <button onClick={() => router.push('/')}>Click</button>
    </>
  );
};

export default EventPage;
