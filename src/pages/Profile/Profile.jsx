import React from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import { getUser } from '../../services/localStorageService.js';
import styles from './Profile.module.css';

function Profile() {
  const user = getUser();

  return (
    <Layout>
      <div className={styles.container}>
        {/* Top header bar */}
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Account Settings</h1>
        </header>

        {/* Profile card – avatar, name, email */}
        <ProfileCard name={user.fullName} email={user.email} />

        {/* Divider */}
        <div className={styles.divider} role="separator" />

        {/* Bio / description section */}
        <section className={styles.bioSection} aria-label="About">
          <p className={styles.bioText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque ex,
            pretium ac leo eu, suscipit faucibus urna. Pellentesque blandit libero quis
            nisl condimentum, vel tincidunt purus semper. Phasellus at lorem urna.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default Profile;
