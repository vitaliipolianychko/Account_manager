import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './styles.module.css';

export const ErrorMessage = ({ meta }) => {
  return (
    <>
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </>
  );
};

ErrorMessage.propTypes = {
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])
  ).isRequired,
};
