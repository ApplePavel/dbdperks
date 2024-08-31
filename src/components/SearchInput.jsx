// components/SearchInput.js
import React from 'react';
import styles from '../styles/Search.module.css';

const SearchInput = ({ query, onSearch, onClear }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="SEARCH"
        value={query}
        onChange={onSearch}
      />
      <div
        className={`${styles.icon} ${query ? styles.clearIcon : styles.searchIcon}`}
        onClick={query ? onClear : undefined}
      />
    </div>
  );
};

export default SearchInput;
