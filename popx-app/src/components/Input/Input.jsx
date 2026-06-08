import React, { useState } from 'react';
import styles from './Input.module.css';

/**
 * Floating-label text input.
 *
 * @param {string}   id          - Unique id, wires label↔input
 * @param {string}   label       - Visible label text
 * @param {string}   type        - Input type (text | email | password | tel)
 * @param {string}   value       - Controlled value
 * @param {Function} onChange    - Change handler
 * @param {string}   error       - Validation error message
 * @param {boolean}  required    - Marks field as required
 * @param {string}   autoComplete
 */
function Input({ id, label, type = 'text', value, onChange, error, required = false, autoComplete }) {
  const [focused, setFocused] = useState(false);

  const isFloating = focused || value.length > 0;

  return (
    <div className={styles.fieldWrapper}>
      <div className={`${styles.inputGroup} ${error ? styles.hasError : ''} ${focused ? styles.focused : ''}`}>
        <label
          htmlFor={id}
          className={`${styles.label} ${isFloating ? styles.labelFloating : ''}`}
        >
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={styles.input}
          autoComplete={autoComplete}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
