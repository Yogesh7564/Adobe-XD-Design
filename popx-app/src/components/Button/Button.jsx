import React from 'react';
import styles from './Button.module.css';

/**
 * Reusable button component.
 *
 * @param {'primary' | 'secondary'} variant  - Visual style
 * @param {string}                  type     - HTML button type (default: 'button')
 * @param {Function}                onClick
 * @param {boolean}                 disabled
 * @param {React.ReactNode}         children
 */
function Button({ variant = 'primary', type = 'button', onClick, disabled = false, children }) {
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${variantClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
