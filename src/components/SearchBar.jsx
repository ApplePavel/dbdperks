
import React from 'react';
import SearchInput from './SearchInput';
import LanguageSwitcher from '../components/LanguageSwitcher';
import styles from '../styles/Search.module.css';

const SearchBar = ({ query, onSearch, onClear }) => {
  return (
    <div className={styles.search}>
      <LanguageSwitcher />
      <SearchInput query={query} onSearch={onSearch} onClear={onClear} />
    </div>
  );
};

export default SearchBar;
