import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout >
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero magnam dolore quisquam
        obcaecati quasi, ducimus, dicta voluptas quis neque laudantium laborum dignissimos.
        Blanditiis excepturi id non quod, voluptatibus exercitationem?
      </p>
      <a href="/about">
        About
      </a>
    </Layout>
  );
}
