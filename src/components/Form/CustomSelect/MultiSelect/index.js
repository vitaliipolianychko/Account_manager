import React from 'react';
import PropTypes from 'prop-types';
import { CustomSelect } from '../index';
import { CustomStyles } from '../styles';

export const MultiSelect = ({ options, meta, input }) => {
  return (
    <CustomSelect
      isMulti
      styles={Object.assign(CustomStyles, MultiCustomStyles)}
      options={options}
      maxMenuHeight={130}
      meta={meta}
      input={input}
    />
  );
};
const MultiCustomStyles = {
  multiValue: base => ({
    ...base,
    border: `none`,
  }),
  multiValueLabel: base => ({
    ...base,
    background: '#E7F0FF',
    color: '#9BB0CB',
  }),
  multiValueRemove: base => ({
    ...base,
    border: `none`,
    background: '#E7F0FF',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#9BB0CB',
    '&:hover': {
      color: '#9BB0CB',
    },
  }),
};

MultiSelect.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.object),
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
