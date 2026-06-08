import React from 'react';
import styles from './RadioGroup.module.css';

/**
 * Accessible radio group for yes/no choices.
 *
 * @param {string}   legend    - Visible group label
 * @param {string}   name      - Shared name attribute for the radio inputs
 * @param {Array}    options   - [{ label, value }]
 * @param {string}   value     - Currently selected value
 * @param {Function} onChange  - (value: string) => void
 */
function RadioGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.optionsRow}>
        {options.map((option) => (
          <label key={option.value} className={styles.optionLabel}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className={styles.radioInput}
            />
            <span className={`${styles.customRadio} ${value === option.value ? styles.checked : ''}`} aria-hidden="true" />
            <span className={styles.optionText}>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
