import React, { useState } from "react";
import PerkGrid from "./PerkGrid";
import styles from "../styles/PaginatedPerkGrid.module.css";

const PaginatedPerkGrid = ({ perks, perksPerPage = 15 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(perks.length / perksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${styles.pageNumber} ${
            currentPage === i ? styles.active : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const start = i * perksPerPage;
    const end = start + perksPerPage;
    pages.push(perks.slice(start, end));
  }

  return (
    <div className={styles.container}>
      <div className={styles.perkContainer}>
        <button
          className={styles.buttonLeft}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        ></button>
        {pages.map((perksBatch, index) => (
          <div
            key={index}
            className={`${styles.page} ${
              currentPage === index + 1 ? styles.visible : styles.hidden
            }`}
          >
            <PerkGrid perks={perksBatch} />
          </div>
        ))}
        <button
          className={styles.buttonRight}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        ></button>
      </div>
      <div className={styles.pagination}>{renderPageNumbers()}</div>
    </div>
  );
};

export default PaginatedPerkGrid;
