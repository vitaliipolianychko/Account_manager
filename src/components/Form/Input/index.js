import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';
// styles
import styles from './styles.module.css';

const classNames = require('classnames');

export const Input = ({ input, kind, type, meta, ...rest }) => {
  const className = classNames(styles[kind], {
    [styles.errorInput]: meta.touched && meta.error,
  });
  return (
    <>
      <input {...input} type={type} className={className} {...rest} />
      <ErrorMessage meta={meta} />
    </>
  );
};

Input.defaultProps = {
  kind: '',
  type: '',
};

Input.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])
  ).isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])
  ).isRequired,
  type: PropTypes.string,
  kind: PropTypes.string,
};
