import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const Button = ({ type, children, ...rest }) => {
  const className = styles[type];
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
