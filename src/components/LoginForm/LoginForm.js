import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

// components
import defaultAvatar from './listOfUsers.svg';
import addAvatar from './add.svg';
import { UserInput } from '../Input/Input';
import {PasswordInput} from '../PasswordInput/PasswordInput';
import {ButtonForward} from '../Buttons/Buttons';

// styles
import styles from './LoginForm.module.css';


const validate = values => {
  const errors ={};
	const requiredFields = ['userName', 'password', 'confirmPassword'];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	if (!values.password) {
		errors.password = 'Required';
	}
	if (values.password !== values.confirmPassword) {
		errors.confirmPassword = "Password's don't match ";
  }
  return errors;
};





const FileInput = ({ 
  input,
}) => {
  return (
    <input
      onChange={event=>{input.onChange(event.target.files[0]);}}
      type="file"
      className={styles.inputfile}
    />
  );
};

const selector = formValueSelector('loginForm');

const mapStateToProps = state => {
  const userNameValue = selector(state, 'userName');
  const passwordValue = selector(state, 'password');
  const confirmPasswordValue = selector(state, 'confirmPassword');
  const avatarValue = selector(state, 'avatar');
	return {
    avatarValue, userNameValue, passwordValue, confirmPasswordValue
	};
};


// eslint-disable-next-line import/no-mutable-exports
let LoginForm = props => {
  const { handleSubmit, avatarValue, userNameValue, passwordValue, confirmPasswordValue } = props;
  const nextPage = () => {
    props.updatePage(2);
};
	return (
  <form onSubmit={handleSubmit(handleSubmit)}>
    <div className={styles.body}>
      <div className={styles.avatar}>
        <div>
          <img
            src={!avatarValue ? defaultAvatar : URL.createObjectURL(avatarValue)} 
            style={{   width: '13em',	height: '13em',	border: '3px solid #5E97F3', borderRadius: '50%', objectFit: "cover" }}
          />
        </div>
        <label className={styles.customFileUpload}>
          <Field name="avatar" component={FileInput} />
          <img src={addAvatar} className={styles.addAvatarLabel} />
          add avatar
        </label>
      </div>
      <div className={styles.form}>
        <div className={styles.inputMargin}>
          <div className={styles.label}>
            <label>User name</label>
            <label>*</label>
          </div>
          <Field
            name="userName"
            component={UserInput}
            className={styles.input}
          />
        </div>
        <div className={styles.inputMargin}>
          <div className={styles.label}>
            <label>Password</label>
            <label>*</label>
          </div>
          <Field
            name="password"
            component={PasswordInput}
            className={styles.input}
          />
        </div>
        <div className={styles.inputMargin}>
          <div className={styles.label}>
            <label>Repeat Password</label>
            <label>*</label>
          </div>
          <Field
            name="confirmPassword"
            component={PasswordInput}
            className={styles.input}
          />
        </div>
        <div />
        <div className={styles.btn}>
          <NavLink to="/addUser/profile" className={!userNameValue || !passwordValue || !confirmPasswordValue || (passwordValue!==confirmPasswordValue) ? styles.btnDisable : null}> 
            <ButtonForward onClick={nextPage} />
          </NavLink> 
        </div>
      </div>
    </div>
  </form>

	);
};

LoginForm = reduxForm({
	form: 'loginForm', // a unique identifier for this form
	destroyOnUnmount: false,
  validate,
})(LoginForm);
LoginForm = connect(mapStateToProps)(LoginForm);

export default LoginForm;
