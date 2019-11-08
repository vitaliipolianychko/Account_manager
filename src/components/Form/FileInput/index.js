import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const FileInput = ({ input }) => {
  return (
    <input
      onChange={event => {
        input.onChange(event.target.files[0]);
      }}
      type="file"
      className={styles.inputFile}
    />
  );
};

FileInput.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
  ).isRequired,
};
