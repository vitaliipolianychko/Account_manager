import React from 'react';

// styles
import styles from './Input.module.css';

export const myInput = props => {
	const { input, type, placeholder, meta, className } = props;
	return (
  <>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={className}
    />

    {meta.error && meta.touched && (
    <div className={styles.error}>{meta.error}</div>
			)}
  </>
	);
};
