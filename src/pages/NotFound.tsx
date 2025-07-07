import React from 'react';
import styles from './NotFound.module.css';
import Header from '../components/Header';

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.notFoundContainer}>
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/">Go to Homepage</a>
      </div>
    </>
  );
};

export default NotFound;
