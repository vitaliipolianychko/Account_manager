import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

// React Components
import InputMask from 'react-input-mask';
import Select from 'react-select';



// Components
import { CustomInput } from '../Input/Input';
import {ButtonBack, ButtonForward} from '../Buttons/Buttons';

// Validation Data
import asyncValidate from '../../Validation/index';

// styles
import styles from './ContactsForm.module.css';

const options = [
	{ value: 'en', label: 'English, EN' },
	{ value: 'fr', label: 'French, FR' },
	{ value: 'es', label: 'Spanish, ES' },
	{ value: 'ar', label: 'Arabic, AR' },
	{ value: 'cmn', label: 'Mandarin, CMN' },
	{ value: 'ru', label: 'Russian, RU' },
	{ value: 'pt', label: 'Portuguese, PT' },
	{ value: 'de', label: 'German, DE' },
	{ value: 'ja', label: 'Japanese, JA' },
	{ value: 'hi', label: 'Hindi, HI' },
	{ value: 'ms', label: 'Malay ,MS' },
	{ value: 'fa', label: 'Persian, FA' },
	{ value: 'sw', label: 'Swahili, SW' },
	{ value: 'ta', label: 'Tamil, TA' },
	{ value: 'it', label: 'Italian, IT' },
	{ value: 'nl', label: 'Dutch, NL' },
	{ value: 'tr', label: 'Turkish, TR' },
	{ value: 'vi', label: 'Vietnamese, VI' },
	{ value: 'pl', label: 'Polish, PL' },
	{ value: 'jv', label: 'Javanese, JV' },
	{ value: 'pa', label: 'Punjabi, PA' },
	{ value: 'th', label: 'Thai, TH' },
	{ value: 'ko', label: 'Korean, KO' },
];

const validate = values => {
	const errors = {};
	const requiredFields = [
		'firstName',
		'lastName',
		'email',
		'favoriteColor',
		'notes',
	];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}
	return errors;
};
const Input = props => (
  <InputMask
    mask="+7 (999) 999-99-99"
    value={props.value}
    onChange={props.onChange}
  >
    {inputProps => (
      <Field
        component={CustomInput}
        className={styles.input}
        name={props.name}
        {...inputProps}
        type="tel"
        disableUnderline
      />
		)}
  </InputMask>
);

const customStyles = {
	option: (provided, state) => ({
	  ...provided,
	  color: state.isSelected ? ' #657C9A' : ' #657C9A',
	  background: state.isSelected ? '#E7F0FF' : '#FFFFFF',
	  background: state.isFocused ? '#E7F0FF' : '#FFFFFF',
	  paddingTop: 10,
	  borderRadius: 0,
	  border: 'none',
	}),
	control: (base, state) => ({
		...base,
		border: '1px solid #C1CFE0',
		boxShadow: 'none',
		'&:hover': {
			border: '1px solid #C1CFE0',
		}
	}),
	singleValue: base=>({
		...base,
		color: '#657C9A',
	}),
  };

const FormSelect = props => {
	const { input, options, styles } = props;
	return (
  <Select
    {...input}
    components={{ DropdownIndicator: () => null, IndicatorSeparator:() => null, Placeholder:()=>null }}
    menuIsOpen
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    options={options}
    maxMenuHeight={170}
    styles={styles}
    theme={theme => ({
		...theme,
		borderRadius: 0,
	  })}
  />
	);
};

// eslint-disable-next-line import/no-mutable-exports
let ContactsForm = props => {
	const {
		handleSubmit
	} = props;
	return (
  <form onSubmit={handleSubmit(handleSubmit)}>
    <div className={styles.contactsForm}>
      <div className={styles.first}>
        <div className={styles.inputMargin}>
          <div>
            <label>Company</label>
          </div>
          <Field
            name="company"
            component={CustomInput}
            label="Company"
          />
        </div>
        <div className={styles.inputMargin}>
          <div>
            <label>GitHub link</label>
          </div>
          <Field
            name="github"
            component={CustomInput}
            label="GitHub link"
          />
        </div>
        <div className={styles.inputMargin}>
          <div>
            <label>Facebook link</label>
          </div>
          <Field
            name="facebook"
            component={CustomInput}
            label="Facebook link"
          />
        </div>
        <div className={styles.inputMargin}>
          <div className={styles.lang}>
            <label>Main language</label>
          </div>
          <Field
            name="language"
            component={FormSelect}
            options={options}
            styles={customStyles}
          />
        </div>
      </div>
      <div className={styles.second}>
        <span>Fax</span>
        <div className={styles.inputMargin}>
          <Input name="fax" />
        </div>
        <span>Phone#1</span>
        <div className={styles.inputMargin}>
          <Input name="phoneOne" />
        </div>
        <span>Phone#2</span>
        <div className={styles.inputMargin}>
          <Input name="phoneTwo" />
        </div>
        <div className={styles.btn}>
          <NavLink to="/addUser/profile">
            <ButtonBack />
          </NavLink>
          <NavLink to="/addUser/capabilities">
            <ButtonForward onClick={() => { props.updatePage(4);}} />
          </NavLink>
        </div>
      </div>
    </div>
  </form>
	);
};

ContactsForm = reduxForm({
	form: 'contactsForm', // a unique identifier for this form
	validate,
	destroyOnUnmount: false,
	asyncValidate,
})(ContactsForm);

export default ContactsForm;
