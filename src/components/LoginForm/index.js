import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import asyncValidate from '../../Validation/index';
import "./loginForm.css";
import ImageAvatars from "../Avatar";
import {onAddUser} from '../../redux/Actions';


const validate = values => {
  const errors = {};
  const requiredFields = [
    'userName',
    'password',
    'confirmPassword'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (!values.password ) {
    errors.password = 'Required';
  }
  if( values.password !== values.confirmPassword)
  {
    errors.confirmPassword = 'Password\'s don\'t match ';
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
    className="input"
  />
);
const selector = formValueSelector('loginForm');

const mapStateToProps = state => {
  const userNameValue = selector(state, 'userName');
  const passwordValue = selector(state, 'password');
  const confirmPasswordValue = selector(state, 'confirmPassword');
  return {
    userNameValue, passwordValue, confirmPasswordValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddUser: (userName, password, confirmPassword) => {
      dispatch(onAddUser(userName, password, confirmPassword));
    },
  };
};

// eslint-disable-next-line import/no-mutable-exports
let LoginForm = props => {
  const { handleSubmit, pristine, submitting, userNameValue, passwordValue, confirmPasswordValue, AddUser } = props;
  const submitData =() => {
    alert(`${userNameValue } ${passwordValue } ${ confirmPasswordValue}`);
    AddUser(userNameValue,passwordValue,confirmPasswordValue );
  };
  return (
    <div className="body">
      <div className="avatar"><ImageAvatars /></div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="inputMargin">
            <Field
              name="userName"
              component={renderTextField}
              placeholder="userName"
            />
          </div>
          <div className="inputMargin">
            <Field name="password" component={renderTextField} type="password" placeholder="password" />
          </div>
          <div className="inputMargin">
            <Field name="confirmPassword" component={renderTextField} type="password" placeholder="confirmPassword"  />
          </div>
          <div />
          <div>
            <button type="submit" className="btn-submit" disabled={pristine || submitting} onClick={submitData}>
          Forward 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm= reduxForm({
  form: 'loginForm', // a unique identifier for this form
  validate,
  asyncValidate
})(LoginForm);


LoginForm = connect(mapStateToProps,
  mapDispatchToProps)(LoginForm);
export default LoginForm;