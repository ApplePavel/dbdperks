// pages/Home.js
import React from 'react';
import styles from '../styles/Home.module.css';
import Search from '../components/Search';
import Banner from '../components/Banner';
import LeftMenu from '../components/LeftMenu';

const Home = () => {
  return (
    <div>
      <LeftMenu/>
      <Banner />
      <div className={styles.wrapper}>
        
        <Search />
      </div>
    </div>
  );
};

export default Home;
