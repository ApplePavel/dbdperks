import React from 'react';
import Search from '../components/Search';
import styles from '../styles/Home.module.css';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Perk Search</h1>
      <LanguageSwitcher /> 
      <Search />
    </div>
  );
};

export default Home;
