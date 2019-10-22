import React from 'react';

// styles
import styles from './Input.module.css';

export const CustomInput = props => {
  const { input, type, placeholder, meta } = props;
	return (
  <>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={styles.input}
    />

    {meta.error && meta.touched && (
    <div className={styles.error}>{meta.error}</div>
			)}
  </>
	);
};

export const UserInput = props => {
  const { input, type, placeholder, meta } = props;
	return (
  <>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={styles.inputUser}
    />

    {meta.error && meta.touched && (
    <div className={styles.error}>{meta.error}</div>
			)}
  </>
	);
};
