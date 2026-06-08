import React from 'react';
import styles from './MobileContainer.module.css';

/**
 * Wraps all page content in a centered mobile-sized card.
 * Simulates a 375×812 mobile viewport centered in the browser.
 */
function MobileContainer({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}

export default MobileContainer;
