import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Events
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              Events list
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
