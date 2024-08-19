import React from 'react';
import Search from '../components/Search';
// import ImageComparator from '../components/ImageComparator';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Perk Search</h1>
      <Search />

    </div>
  );
};

export default Home;
