import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import { getUser } from '../../services/localStorageService.js';
import styles from './Login.module.css';

const INITIAL_FIELDS = { email: '', password: '' };
const INITIAL_ERRORS = { email: '', password: '' };

function Login() {
  const navigate = useNavigate();
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  function handleChange(field) {
    return (e) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear error on change
      setErrors((prev) => ({ ...prev, [field]: '' }));
    };
  }

  function validate() {
    const newErrors = { email: '', password: '' };
    let valid = true;

    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!fields.password) {
      newErrors.password = 'Password is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    // Check credentials against stored user
    const storedUser = getUser();
    if (
      storedUser &&
      storedUser.email.toLowerCase() === fields.email.toLowerCase() &&
      storedUser.password === fields.password
    ) {
      navigate('/profile');
    } else {
      setErrors((prev) => ({
        ...prev,
        email: 'Invalid email or password.',
      }));
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Signin to your PopX account</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Input
            id="login-email"
            label="Email Address"
            type="email"
            value={fields.email}
            onChange={handleChange('email')}
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            id="login-password"
            label="Password"
            type="password"
            value={fields.password}
            onChange={handleChange('password')}
            error={errors.password}
            required
            autoComplete="current-password"
          />

          <div className={styles.buttonWrapper}>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
