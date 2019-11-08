import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';
import s from './styles.module.css';

const classNames = require('classnames');

export const CustomSelect = ({
  input,
  meta,
  options,
  maxMenuHeight,
  styles,
  isMulti,
}) => {
  const className = classNames({
    [s.errorInput]: meta.touched && meta.error,
  });
  return (
    <>
      <Select
        {...input}
        isMulti={isMulti}
        components={{
          IndicatorSeparator: () => null,
          Placeholder: () => null,
        }}
        className={className}
        onChange={value => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        maxMenuHeight={maxMenuHeight}
        styles={styles}
      />
      <ErrorMessage meta={meta} />
    </>
  );
};
CustomSelect.defaultProps = {
  isMulti: false,
};

CustomSelect.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
      ]),
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
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.objectOf(PropTypes.func).isRequired,
  maxMenuHeight: PropTypes.number.isRequired,
  isMulti: PropTypes.bool,
};
