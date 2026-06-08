import React from 'react';
import styles from './ProfileCard.module.css';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

/**
 * Displays the user's avatar, name, and email in a row.
 *
 * @param {string} name   - User's full name
 * @param {string} email  - User's email address
 */
function ProfileCard({ name, email }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img
          src={avatarPlaceholder}
          alt={`${name}'s profile picture`}
          className={styles.avatar}
        />
        {/* Camera icon overlay */}
        <span className={styles.cameraIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
              fill="#fff"
            />
            <path
              d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-8 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
              fill="#fff"
            />
          </svg>
        </span>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
