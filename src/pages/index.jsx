// pages/Home.js
import React from 'react';
import styles from '../styles/Home.module.css';
import Search from '../components/Search';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <Search />
    </div>
  );
};

export default Home;
