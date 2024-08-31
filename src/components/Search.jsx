// components/Search.js
import React, { useState } from 'react';
import PaginatedPerkGrid from './PaginatedPerkGrid';
import { perksData } from '../data/perksData';
import SearchBar from './SearchBar';
import styles from '../styles/Search.module.css';

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  const normalizeText = (text) => text.toLowerCase().trim();

  const filteredPerks = perksData.filter((perk) => {
    const queryNormalized = normalizeText(query);

    const nameMatches = Object.values(perk.name).some((name) =>
      normalizeText(name).includes(queryNormalized)
    );

    const descriptionMatches = Object.values(perk.description).some((desc) =>
      normalizeText(desc).includes(queryNormalized)
    );

    const authorMatches = perk.author 
      ? Object.values(perk.author).some((authorString) =>
          normalizeText(authorString).split(',').some((author) =>
            normalizeText(author).includes(queryNormalized)
          )
        )
      : false;

    return nameMatches || descriptionMatches || authorMatches;
  });

  return (
    <div className={styles.queryPage}>
      <SearchBar query={query} onSearch={handleSearch} onClear={handleClear} />
      <PaginatedPerkGrid perks={filteredPerks} perksPerPage={15} />
    </div>
  );
};

export default Search;
