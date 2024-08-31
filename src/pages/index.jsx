import React from 'react';
import styles from '../styles/Home.module.css';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className={styles.wrapper}>
          <Search></Search>
    </div>

  );
};

export default Home;
