import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Events 2023</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;
