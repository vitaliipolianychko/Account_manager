import React from 'react';
import PropTypes from 'prop-types';
import { CustomSelect } from '../index';
import { CustomStyles } from '../styles';

const StylesSelect = {
  singleValue: base => ({
    ...base,
    color: '#657C9A',
  }),
};
export const SingleSelect = ({ input, options, meta }) => {
  return (
    <CustomSelect
      {...input}
      styles={Object.assign(CustomStyles, StylesSelect)}
      options={options}
      maxMenuHeight={170}
      meta={meta}
      input={input}
    />
  );
};

SingleSelect.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.object,
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
};
