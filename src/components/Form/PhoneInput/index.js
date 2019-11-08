import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import InputMask from 'react-input-mask';
import { Input } from '../Input';

export const PhoneInput = ({ value, onChange, name }) => (
  <InputMask mask="+7 (999) 999-99-99" value={value} onChange={onChange}>
    {() => <Field component={Input} kind="default" name={name} />}
  </InputMask>
);
PhoneInput.defaultProps = {
  value: '',
  onChange: () => {},
};

PhoneInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};
