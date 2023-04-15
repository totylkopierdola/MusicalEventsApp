import { FaExclamationTriangle } from 'react-icons/fa';
import React from 'react';
import styles from '@/styles/404.module.css';
import Layout from '@/components/Layout';

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          {" "}404
        </h1>
        <h4>Sorry, page not found</h4>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
