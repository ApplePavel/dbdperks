// pages/Home.js
import React from 'react';
import styles from '../styles/Home.module.css';
import Search from '../components/Search';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className={styles.wrapper}>
        
        <Search />
      </div>
    </div>
  );
};

export default Home;
