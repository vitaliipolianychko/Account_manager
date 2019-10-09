import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm,formValueSelector } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from 'react-date-picker';
import asyncValidate from '../../Validation/index';
import "./profileForm.css";
import {onAddUser} from '../../redux/Actions';

const validate = values => {
  const errors = {};
  const requiredFields = [ 'firstName', 'lastName', 'email',  'address', 'sex' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    label={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    variant="outlined"
    className="input-profile"
  />
);

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
  </FormControl>
);
/*
const selectorDo = formValueSelector('loginForm');
const selector = formValueSelector('profileForm');

const mapStateToProps = state => {
  const userNameValue = selectorDo(state, 'userName');
  const passwordValue = selectorDo(state, 'password');
  const confirmPasswordValue = selectorDo(state, 'confirmPassword');
  const firstNameValue = selector(state, 'firstName');
  const lastNameValue = selector(state, 'lastName');
  const emailValue = selector(state, 'email');
  const addressValue = selector(state, 'address');
  const sexValue = selector(state, 'sex');
  return {
    userNameValue, passwordValue, confirmPasswordValue, firstNameValue, lastNameValue, emailValue, addressValue, sexValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddUser: (userName, password, confirmPassword, firstName, lastName, email, address, sex) => {
      dispatch(onAddUser(userName, password, confirmPassword, firstName, lastName, email, address, sex));
    },
  };
};
*/

// eslint-disable-next-line import/no-mutable-exports
let ProfileForm = props => {
  const { handleSubmit, pristine, submitting} = props;
   /* const submitData =() => {
    AddUser(userNameValue, passwordValue,
      confirmPasswordValue, firstNameValue, lastNameValue, emailValue, addressValue, sexValue );
  };
  */
  return (
    <div className="AccountForm">
      <form onSubmit={handleSubmit}>
        <div className="firstColumn">
          <div className="inputMargin">
            <Field name="firstName" component={renderTextField} label="First Name" />
          </div>
          <div className="inputMargin">
            <Field name="lastName" component={renderTextField} label="Last Name" />
          </div>
          <div className="inputMargin">
            <DatePicker />
          </div>
        </div>
        <div className="secondColumn">
          <div className="inputMargin">
            <Field name="email" component={renderTextField} label="Email" />
          </div>
          <div className="inputMargin">
            <Field name="address" component={renderTextField} label="Address" />
          </div>
          <div className="radio">
            <Field name="sex" component={radioButton}>
              <Radio value="male" label="male" />
              <Radio value="female" label="female" />
            </Field>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting} className="btn-profile">Forward</button>
          </div>
        </div>
      </form>
    </div>
  );
};

ProfileForm = reduxForm({
  form: 'profileForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(ProfileForm);

/* ProfileForm = connect(mapStateToProps,
  mapDispatchToProps)(ProfileForm);
  */

export default ProfileForm;