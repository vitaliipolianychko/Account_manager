import React, {useState} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import asyncValidate from '../../Validation/index';
import styles from "./LoginForm.module.css";
import ImageAvatars from "../Avatar";
import {myInput} from "../Input/Input";
import showPass from './icons/iconVisibilityOff.svg';
import hiddenPass from './icons/iconVisibility.svg';

 


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

const selector = formValueSelector('loginForm');

const mapStateToProps = state => {
  const userNameValue = selector(state, 'userName');
  const passwordValue = selector(state, 'password');
  const confirmPasswordValue = selector(state, 'confirmPassword');
  return {
    userNameValue, passwordValue, confirmPasswordValue
  };
};
/* const mapDispatchToProps = dispatch => {
  return {
    AddUser: (userName, password, confirmPassword) => {
      dispatch(onAddUser(userName, password, confirmPassword));
    },
  };
};
*/

// eslint-disable-next-line import/no-mutable-exports
let LoginForm = props => {
  const { handleSubmit, pristine, submitting} = props;
  const [type, setType] = useState('password');
  const [typeSecond, setTypeSecond] = useState('password');

  const checkPassword =() =>{
    if(type==='password'){
      setType('text');
    }
    else{
      setType('password');
    }
  };

  const checkConfirmPassword =() =>{
    if(typeSecond==='password'){
      setTypeSecond('text');
    }
    else {
      setTypeSecond('password');
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.avatar}><ImageAvatars /></div>

      <form onSubmit={handleSubmit(handleSubmit)}>
        <div className={styles.form}>
          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>User name</label> 
              <label>*</label>
            </div>
            <Field
              name="userName"
              component={myInput}
              className={styles.input}
            />
          </div>

          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>Password</label> 
              <label>*</label>
            </div>
            <Field name="password" component={myInput} type={type} className={styles.input} />
            <span className={styles.icons}>
              {type==='password' &&
              <input type="image" src={hiddenPass} onClick={checkPassword} style={{outline: 'none'}}  />}
              {type==='text' &&
              <input type="image" src={showPass} onClick={checkPassword} style={{outline: 'none'}} />}
            </span>
          </div>
          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>Repeat Password</label>
              <label>*</label>
            </div>
            <Field name="confirmPassword" component={myInput} type={typeSecond} className={styles.input} />
            <span className={styles.icons}>
              {typeSecond==='password' &&
              <input type="image" src={hiddenPass} onClick={checkConfirmPassword} style={{outline: 'none'}} />}
              {typeSecond==='text' &&
              <input type="image" src={showPass} onClick={checkConfirmPassword} style={{outline: 'none'}} />}
            </span>
          </div>
          <div />
          <div className={styles.btn}>
            <button type="submit" className={styles.btnSubmit} disabled={pristine || submitting}>
          Forward 
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

LoginForm= reduxForm({
  form: 'loginForm', // a unique identifier for this form
  destroyOnUnmount: false,
  validate,
  asyncValidate
})(LoginForm);
LoginForm = connect(mapStateToProps)(LoginForm);

export default LoginForm;