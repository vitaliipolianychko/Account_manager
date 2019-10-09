import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import asyncValidate from '../../Validation/index';
import "./contactsForm.css";
import {onAddUser} from '../../redux/Actions';


/* const options = [
  {value: "en", label: "English"},
  {value: "fr", label: "French"},
  {value: "es", label: "Spanish"},
  {value: "ar", label: "Arabic"},
  {value: "cmn", label: "Mandarin"},
  {value: "ru", label: "Russian"},
  {value: "pt", label: "Portuguese"},
  {value: "de", label: "German"},
  {value: "ja", label: "Japanese"},
  {value: "hi", label: "Hindi"},
  {value: "ms", label: "Malay"},
  {value: "fa", label: "Persian"},
  {value: "sw", label: "Swahili"},
  {value: "ta", label: "Tamil"},
  {value: "it", label: "Italian"},
  {value: "nl", label: "Dutch"},
  {value: "tr", label: "Turkish"},
  {value: "vi", label: "Vietnamese"},
  {value: "pl", label: "Polish"},
  {value: "jv", label: "Javanese"},
  {value: "pa", label: "Punjabi"},
  {value: "th", label: "Thai"},
  {value: "ko", label: "Korean"},
];
*/

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

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    variant="outlined"
  />
);
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="main-language">Main Language</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'main-language',
        id: 'main-language'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

/* const MaskInput = (props) => (
  <InputMask mask="+7 (999) 999-99-99" value={props.value} onChange={props.onChange}>
    {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
  </InputMask>
);
*/
const renderMaskField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    variant="outlined"
  >
    {() => <InputMask mask="+7(999)-99-99" maskChar=" " />}
    
  </TextField>
);



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
 console.log(faxValue);
  };
  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <div className="inputMargin">
          <Field name="company" component={renderTextField} label="Company" />
        </div>
        <div className="inputMargin">
          <Field name="github" component={renderTextField} label="GitHub link" />
        </div>
        <div className="inputMargin">
          <Field name="facebook" component={renderTextField} label="Facebook link" />
        </div>
        <div className="inputMargin">
          <Field
            className="lang"
            name="language"
            component={renderSelectField}
            label="Main Language"
          >
            <option value="" />
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ar">Arabic</option>
            <option value="cmn">Mandarin</option>
            <option value="ru">Russian</option>
            <option value="pt">Portuguese</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </Field>
        
        </div>
        <span>Fax</span>
        <div className="inputMargin">
          <Field name="fax" component={renderMaskField} label="fax" />
        </div>
        <span>Phone#1</span>
        <div className="inputMargin">
          <InputMask name="phoneOne" mask="+7 (999) 999-99-99" style={{width:300, height: 30}} />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting} className="btn-contacts" onClick={submitData}>
          Forward
          </button>
        </div>
      </form>
    </div>
  );
};

ContactsForm= reduxForm({
  form: 'contactsForm', // a unique identifier for this form
  validate,
  asyncValidate
})(ContactsForm);

ContactsForm = connect( mapStateToProps, mapDispatchToProps)(ContactsForm);

export default ContactsForm;
