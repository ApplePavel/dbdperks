import React from 'react';
import PaginatedPerkGrid from '../components/PaginatedPerkGrid';
import { perksData } from '../data/perksData';
import styles from '../styles/Home.module.css';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Search from '../components/Search';


const Home = () => {
  return (
    <div className={styles.wrapper}>
          <h1>Perk Search</h1>
          <LanguageSwitcher />
          <Search></Search>
    </div>

  );
};

export default Home;
