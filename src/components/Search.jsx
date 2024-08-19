import React, { useState } from 'react';
import PerkGrid from './PerkGrid';
import { perksData } from '../data/perksData';
import styles from '../styles/Search.module.css';

const Search= () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery(event.target.value);
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

    const authorMatches = Object.values(perk.author).some((authorString) =>
      normalizeText(authorString).split(',').some((author) =>
        normalizeText(author).includes(queryNormalized)
      )
    );

    return nameMatches || descriptionMatches || authorMatches;
  });

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="SEARCH"
        value={query}
        onChange={handleSearch}
      />
      <PerkGrid perks={filteredPerks} />
    </div>
  );
};

export default Search;
