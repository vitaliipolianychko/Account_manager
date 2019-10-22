import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

// React Components
import Select from 'react-select';
import {ButtonBack, ButtonSubmit} from '../Buttons/Buttons';
// import CustomClearText from './Close.svg';

// Actions
import { onAddUser } from '../../redux/reducer';

// styles
import styles from './CapabilitiesForm.module.css';

const skill = [
	{ value: 'HTML', label: 'HTML' },
	{ value: 'CSS', label: 'CSS' },
	{ value: 'Javascript', label: 'Javascript' },
	{ value: 'React', label: 'React' },
  { value: 'Angular', label: 'Angular' },
  { value: 'jQuery', label: 'jQuery' },
	{ value: 'NodeJS', label: 'NodeJS' },
	{ value: 'Python', label: 'Python' },
	{ value: 'PHP', label: 'PHP' },
  { value: 'Ruby On Rails', label: 'Ruby On Rails' },
  { value: 'SQL', label: 'SQL' },
	{ value: 'BackboneJS', label: 'BackboneJS' },
	{ value: 'Web Design', label: 'Web Design' },
	{ value: 'Project management', label: 'Project management' },
  { value: 'Git', label: 'Git' },
  { value: 'Docker', label: 'Docker' },
	{ value: 'AWS Lambda', label: 'AWS Lambda' },
	{ value: 'Firebase', label: 'Firebase' },
];

const MultiCustomStyles = {
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
		}
  }),
  /* clearIndicator: (base, state) => ({
    ...base,
   display: 'none',
  }),
  */
  };
  /*
  const CustomClearText = () => 'clear all';
  const ClearIndicator = props => {
    const {
      children = <CustomClearText />,
      getStyles,
      innerProps: { ref, ...restInnerProps },
    } = props;
    return (
      <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
      >
      <div style={{ right: '0px' }}>{children}</div>
      </div>
    );
    };
    */

const MultiSelect = props => {
	const { input, options, styles } = props;

	return (
  <Select
    {...input}
    isMulti
    menuIsOpen
    components={{IndicatorSeparator:() => null, Placeholder:()=>null}}
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    styles={styles}
    options={options}
    maxMenuHeight={130}
    theme={theme => ({
      ...theme,
      borderRadius: 0,
      })}
		/>
	);
};

const selectorLogin = formValueSelector('loginForm');
const selectorProfile = formValueSelector('profileForm');
const selectorContacts = formValueSelector('contactsForm');
const selectorCapabilities = formValueSelector('capabilitiesForm');

const mapStateToProps = state => {
  const avatarValue = selectorLogin(state, 'avatar');
	const userNameValue = selectorLogin(state, 'userName');
	const passwordValue = selectorLogin(state, 'password');
	const confirmPasswordValue = selectorLogin(state, 'confirmPassword');
	const firstNameValue = selectorProfile(state, 'firstName');
	const lastNameValue = selectorProfile(state, 'lastName');
  const emailValue = selectorProfile(state, 'email');
  const birthDayValue = selectorProfile(state, 'birthDay');
	const addressValue = selectorProfile(state, 'address');
	const sexValue = selectorProfile(state, 'sex');
	const companyValue = selectorContacts(state, 'company');
	const githubValue = selectorContacts(state, 'github');
	const facebookValue = selectorContacts(state, 'facebook');
	const languageValue = selectorContacts(state, 'language');
	const faxValue = selectorContacts(state, 'fax');
  const phoneOneValue = selectorContacts(state, 'phoneOne');
  let skillsValue = [];
	skillsValue = selectorCapabilities(state, 'skills');
	const notesValue = selectorCapabilities(state, 'notes');
	const artValue = selectorCapabilities(state, 'art');
	const sportValue = selectorCapabilities(state, 'sport');
	const justPlayValue = selectorCapabilities(state, 'justPlay');
	const femaleValue = selectorCapabilities(state, 'female');
	const guitarValue = selectorCapabilities(state, 'guitar');
	const wtfValue = selectorCapabilities(state, 'wtf');

	return {
    avatarValue,
		userNameValue,
		passwordValue,
		confirmPasswordValue,
		firstNameValue,
		lastNameValue,
    emailValue,
    birthDayValue,
		addressValue,
		sexValue,
		companyValue,
		githubValue,
		facebookValue,
		languageValue,
		faxValue,
    phoneOneValue,
    skillsValue,
		notesValue,
		artValue,
		sportValue,
		justPlayValue,
		femaleValue,
		guitarValue,
		wtfValue,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		AddUser: (
      avatar,
			userName,
			password,
			confirmPassword,
			firstName,
			lastName,
      email,
      birthDay,
			address,
			sex,
			company,
			github,
			facebook,
			language,
			fax,
			phoneOne, skills, notes, art, sport, justPlay, female, guitar, wtf
		) => {
			dispatch(
				onAddUser(
          avatar,
					userName,
					password,
					confirmPassword,
					firstName,
					lastName,
          email,
          birthDay,
					address,
					sex,
					company,
					github,
					facebook,
					language,
					fax,
					phoneOne, skills, notes, art, sport, justPlay, female, guitar, wtf
				)
			);
		},
	};
};

// eslint-disable-next-line react/prefer-stateless-function
class CapabilitiesForm extends Component {
	render() {
		const {
      handleSubmit,
      avatarValue,
      userNameValue,
      passwordValue,
      confirmPasswordValue,
      firstNameValue,
      lastNameValue,
      emailValue,
      birthDayValue,
      addressValue,
      sexValue,
      companyValue,
      githubValue,
      facebookValue,
      languageValue,
      faxValue,
      phoneOneValue,
      skillsValue,
      notesValue,
      artValue,
      sportValue,
      justPlayValue,
      femaleValue,
      guitarValue,
      wtfValue, AddUser
		} = this.props;
    const submitData = () => {
  AddUser(
  avatarValue, userNameValue,
  passwordValue,
  confirmPasswordValue,
  firstNameValue,
  lastNameValue,
  emailValue,
  birthDayValue,
  addressValue,
  sexValue,
  companyValue,
  githubValue,
  facebookValue,
  languageValue,
  faxValue,
  phoneOneValue,
  skillsValue,
  notesValue,
  artValue,
  sportValue,
  justPlayValue,
  femaleValue,
  guitarValue,
  wtfValue);
    };
		return (
  <form onSubmit={handleSubmit(handleSubmit)}>
    <div className={styles.CapabilitiesForm}>
      <div className={styles.first}>
        <div className={styles.skills}>
          <div className={styles.label}>
            <label>Skills</label>
          </div>
          <Field
            name="skills"
            component={MultiSelect}
            label="Skills"
            options={skill}
            styles={MultiCustomStyles}
          />
        </div>
        <div>
          <div className={styles.label}>
            <label>Additional information</label>
          </div>
          <Field
            name="notes"
            component="textarea"
            className={styles.textArea}
          />
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.hobbiesContainer}>
          <label>My hobbies</label>
        </div>
        <label className={styles.container}>
          <Field component="input" type="checkbox" name="art" value="Art" />
          <span className={styles.checkmark} />
							Art
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="sport"
            value="Sport, fitness, aerobica and staff like that"
          />
          <span className={styles.checkmark} />
							Sport, fitness, aerobica and staff like that
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="justPlay"
            value="I just want to play games, I’m not living in this life"
          />
          <span className={styles.checkmark} />
I just want to play games,
							I’m not living in this life
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="female"
            value="I’m a female... I’m doing nothing. Every day."
          />
          <span className={styles.checkmark} />
							I’m a female... I’m doing nothing. Every day.
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="guitar"
            value="Guitar, guitar and guitar again. I’m fall in love with it."
          />
          <span className={styles.checkmark} />
							Guitar, guitar and guitar again. I’m fall in love with it.
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="wtf"
            value="WTF is “hobbies”???"
          />
          <span className={styles.checkmark} />
							WTF is “hobbies”???
        </label>

        <div className={styles.btn}>
          <NavLink to="/addUser/contacts">
            <ButtonBack />
          </NavLink>
          <ButtonSubmit onClick={submitData} />
        </div>
      </div>
    </div>
  </form>
		);
	}
}

CapabilitiesForm = reduxForm({
	form: 'capabilitiesForm',
	destroyOnUnmount: false,
})(CapabilitiesForm);

CapabilitiesForm = connect(mapStateToProps, mapDispatchToProps)(CapabilitiesForm);

export default CapabilitiesForm;
