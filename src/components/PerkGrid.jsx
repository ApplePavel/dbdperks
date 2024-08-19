import React, { useState } from 'react';
import styles from '../styles/PerkGrid.module.css';
import { defaultData } from '../data/defaultData'; // Import the default status effect descriptions

const PerkGrid = ({ perks }) => {
  const [hoveredPerk, setHoveredPerk] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event, perk) => {
    const rect = event.target.getBoundingClientRect();

    setPosition({
      top: rect.top - 102,
      left: rect.right - 400,
    });

    setHoveredPerk(perk);
  };

  const handleMouseLeave = () => {
    setHoveredPerk(null);
  };

  return (
    <div className={styles.perkgrid}>
      {perks.map((perk) => (
        <div
          key={perk.id}
          className={styles.perkitem}
          onMouseEnter={(e) => handleMouseEnter(e, perk)}
          // onMouseLeave={handleMouseLeave}
        >
          <img src={perk.icon} alt={perk.name.en} />
        </div>
      ))}

      {hoveredPerk && (
        <div
          className={styles.perkTooltip}
          style={{ top: position.top, left: position.left }}
        >
          <div className={styles.perkHeader}>
            <h3 className={styles.perkName}>{hoveredPerk.name.en}</h3>
            <p className={styles.perkAuthor}>Very rare {hoveredPerk.author.en} perk</p>
          </div>
          <div className={styles.perkBottom}>
          {hoveredPerk.falseDescription?.en && (
              <p className={styles.perkFalseDescription}>{hoveredPerk.falseDescription.en}</p>
            )}
            <p className={styles.perkDescription}>{hoveredPerk.description.en}</p>
            {hoveredPerk.statusEffect.length > 0 && (
              <div className={styles.statusEffects}>
                {hoveredPerk.statusEffect.map(effect => (
                  <p key={effect} className={styles.statusEffect}>
                    {defaultData[effect]?.en}
                  </p>
                ))}
              </div>
            )}

            <p className={styles.perkComment}>{hoveredPerk.falseauthorComment.en}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerkGrid;
