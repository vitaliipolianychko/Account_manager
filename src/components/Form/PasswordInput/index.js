import React, { useState } from 'react';
import PropTypes from 'prop-types';
import showPass from './icons/iconVisibilityOff.svg';
import hiddenPass from './icons/iconVisibility.svg';
// styles
import styles from './styles.module.css';
import { ErrorMessage } from '../ErrorMessage';

const classNames = require('classnames');

export const PasswordInput = ({ input, meta }) => {
  const [password, setPassword] = useState('password');
  const checkPassword = () => {
    password === 'password' ? setPassword('text') : setPassword('password');
  };
  const className = classNames(styles.input, {
    [styles.errorInput]: meta.touched && meta.error,
  });
  return (
    <>
      <div className={styles.passInput}>
        <input {...input} type={password} className={className} />
        <div
          onClick={checkPassword}
          onKeyPress={() => {}}
          role="button"
          className={styles.icons}
        >
          <img
            src={password === 'password' ? hiddenPass : showPass}
            alt="Pass"
          />
        </div>
      </div>
      <ErrorMessage meta={meta} />
    </>
  );
};

PasswordInput.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string])
  ).isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])
  ).isRequired,
};
