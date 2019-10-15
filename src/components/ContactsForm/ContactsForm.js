import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import { connect } from 'react-redux';
import {onAddUser} from '../../redux/actions';
import {myInput} from "../Input/Input";
import asyncValidate from '../../Validation/index';
import styles from "./ContactsForm.module.css";


const options = [
  {value: "en", label: "English, EN"},
  {value: "fr", label: "French, FR"},
  {value: "es", label: "Spanish, ES"},
  {value: "ar", label: "Arabic, AR"},
  {value: "cmn", label: "Mandarin, CMN"},
  {value: "ru", label: "Russian, RU"},
  {value: "pt", label: "Portuguese, PT"},
  {value: "de", label: "German, DE"},
  {value: "ja", label: "Japanese, JA"},
  {value: "hi", label: "Hindi, HI"},
  {value: "ms", label: "Malay ,MS"},
  {value: "fa", label: "Persian, FA"},
  {value: "sw", label: "Swahili, SW"},
  {value: "ta", label: "Tamil, TA"},
  {value: "it", label: "Italian, IT"},
  {value: "nl", label: "Dutch, NL"},
  {value: "tr", label: "Turkish, TR"},
  {value: "vi", label: "Vietnamese, VI"},
  {value: "pl", label: "Polish, PL"},
  {value: "jv", label: "Javanese, JV"},
  {value: "pa", label: "Punjabi, PA"},
  {value: "th", label: "Thai, TH"},
  {value: "ko", label: "Korean, KO"},
];


const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
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
const Input = (props) => (
  <InputMask mask="+7 (999) 999-99-99" value={props.value} onChange={props.onChange}>
    {(inputProps) => <Field component={myInput} className={styles.input} name="phoneOne" {...inputProps} type="tel" disableUnderline />}
  </InputMask>
);


const FormSelect = props => {
  const { input, options } = props;

  return (
    <Select 
      {...input} 
      onChange={value => input.onChange(value)} 
      onBlur={() => input.onBlur(input.value)} 
      options={options}
    />
  );
};



const selectorLogin = formValueSelector('loginForm');
const selectorProfile = formValueSelector('profileForm');
const selectorContacts = formValueSelector('contactsForm');

const mapStateToProps = state => {
  const userNameValue = selectorLogin(state, 'userName');
  const passwordValue = selectorLogin(state, 'password');
  const confirmPasswordValue = selectorLogin(state, 'confirmPassword');
  const firstNameValue = selectorProfile(state, 'firstName');
  const lastNameValue = selectorProfile(state, 'lastName');
  const emailValue = selectorProfile(state, 'email');
  const addressValue = selectorProfile(state, 'address');
  const sexValue = selectorProfile(state, 'sex');
  const companyValue = selectorContacts(state, 'company');
  const githubValue = selectorContacts(state, 'github');
  const facebookValue = selectorContacts(state, 'facebook');
  const languageValue = selectorContacts(state, 'language');
  const faxValue = selectorContacts(state, 'fax');
  const phoneOneValue = selectorContacts(state, 'phoneOne');

  return {
    userNameValue, passwordValue, confirmPasswordValue, firstNameValue, lastNameValue, emailValue, addressValue, sexValue,
    companyValue, githubValue, facebookValue, languageValue, faxValue, phoneOneValue,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddUser: (userName, password, confirmPassword, firstName, lastName, email, address, sex, company, github, facebook, language, fax, phoneOne) => {
      dispatch(onAddUser(userName, password, confirmPassword, firstName, lastName, email, address, sex, company, github, facebook, language, fax, phoneOne));
    },
  };
};

// eslint-disable-next-line import/no-mutable-exports
let ContactsForm = props => {
  const { handleSubmit, pristine, submitting, userNameValue, passwordValue,
    confirmPasswordValue, firstNameValue, lastNameValue, emailValue, addressValue, sexValue, companyValue, githubValue, facebookValue, languageValue,
 faxValue, phoneOneValue, AddUser } = props;
  const submitData =() => {
     AddUser(userNameValue, passwordValue,
      confirmPasswordValue, firstNameValue, lastNameValue, emailValue, addressValue, sexValue, companyValue, githubValue, facebookValue, languageValue,
 faxValue, phoneOneValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.contactsForm}>
        <div className={styles.first}>
          <div className={styles.inputMargin}>
            <div><label>Company</label></div>
            <Field name="company" component={myInput} label="Company" className={styles.input} />
          </div>
          <div className={styles.inputMargin}>
            <div><label>GitHub link</label></div>
            <Field name="github" component={myInput} label="GitHub link" className={styles.input} />
          </div>
          <div className={styles.inputMargin}>
            <div><label>Facebook link</label></div>
            <Field name="facebook" component={myInput} label="Facebook link" className={styles.input} />
          </div>
          <div className={styles.inputMargin}>
            <Field
              className={styles.lang}
              name="language"
              component={FormSelect}
              options={options}
            />
        
          </div>
        </div>
        <div className={styles.second}>
          <span>Fax</span>
          <div className={styles.inputMargin}>
            <Field name="fax" component={myInput} label="fax" className={styles.input} />
          </div>
          <span>Phone#1</span>
          <div className={styles.inputMargin}>
            <Input />
          </div>
          <span>Phone#2</span>
          <div className={styles.inputMargin}>
            <InputMask name="phoneTwo" mask="+7 (999) 999-99-99" className={styles.input} />
          </div>
          <div className={styles.btn}>
            <button type="submit" disabled={pristine || submitting} className={styles.btnContactsBack}>Back</button>
            <button type="submit" disabled={pristine || submitting} className={styles.btnContacts} onClick={submitData}>
          Forward
            </button>
          </div>
        </div>
      </div>
    </form>

  );
};

ContactsForm= reduxForm({
  form: 'contactsForm', // a unique identifier for this form
  validate,
  destroyOnUnmount: false,
  asyncValidate
})(ContactsForm);

ContactsForm = connect( mapStateToProps, mapDispatchToProps)(ContactsForm);

export default ContactsForm;
