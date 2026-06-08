import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import Button from '../../components/Button/Button.jsx';
import styles from './Landing.module.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Welcome to PopX</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.actions}>
          <Button variant="primary" onClick={() => navigate('/signup')}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Landing;
