import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import RadioGroup from '../../components/RadioGroup/RadioGroup.jsx';
import { saveUser } from '../../services/localStorageService.js';
import styles from './Signup.module.css';

const AGENCY_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

const INITIAL_FIELDS = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
  company: '',
  isAgency: 'yes',
};

const INITIAL_ERRORS = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
};

function Signup() {
  const navigate = useNavigate();
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  function handleChange(field) {
    return (e) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: '' }));
    };
  }

  function handleAgencyChange(value) {
    setFields((prev) => ({ ...prev, isAgency: value }));
  }

  function validate() {
    const newErrors = { fullName: '', phone: '', email: '', password: '' };
    let valid = true;

    if (!fields.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
      valid = false;
    }

    if (!fields.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      valid = false;
    } else if (!/^\+?[\d\s\-().]{7,15}$/.test(fields.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
      valid = false;
    }

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
    } else if (fields.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const userData = {
      fullName: fields.fullName.trim(),
      phone: fields.phone.trim(),
      email: fields.email.trim(),
      password: fields.password,
      company: fields.company.trim(),
      isAgency: fields.isAgency,
    };

    saveUser(userData);
    navigate('/profile');
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create your PopX account</h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Input
            id="signup-fullname"
            label="Full Name"
            type="text"
            value={fields.fullName}
            onChange={handleChange('fullName')}
            error={errors.fullName}
            required
            autoComplete="name"
          />
          <Input
            id="signup-phone"
            label="Phone Number"
            type="tel"
            value={fields.phone}
            onChange={handleChange('phone')}
            error={errors.phone}
            required
            autoComplete="tel"
          />
          <Input
            id="signup-email"
            label="Email Address"
            type="email"
            value={fields.email}
            onChange={handleChange('email')}
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            id="signup-password"
            label="Password"
            type="password"
            value={fields.password}
            onChange={handleChange('password')}
            error={errors.password}
            required
            autoComplete="new-password"
          />
          <Input
            id="signup-company"
            label="Company Name"
            type="text"
            value={fields.company}
            onChange={handleChange('company')}
            error=""
            autoComplete="organization"
          />

          <RadioGroup
            legend="Are you an Agency?"
            name="isAgency"
            options={AGENCY_OPTIONS}
            value={fields.isAgency}
            onChange={handleAgencyChange}
          />

          <div className={styles.buttonWrapper}>
            <Button type="submit" variant="primary">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
