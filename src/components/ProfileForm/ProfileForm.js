import React from 'react';
import { Field, reduxForm,formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import asyncValidate from '../../Validation/index';
import { myInput } from '../Input/Input';
import {renderDatePicker} from '../DatePicker/DatePicker';
import styles from "./ProfileForm.module.css";




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
  const birthDayValue = selector(state, 'birthDay');
  return {
    userNameValue, passwordValue, confirmPasswordValue, firstNameValue, lastNameValue, emailValue, addressValue, sexValue, birthDayValue
  };
};
/* const mapDispatchToProps = dispatch => {
  return {
    AddUser: (userName, password, confirmPassword, firstName, lastName, email, address, sex) => {
      dispatch(onAddUser(userName, password, confirmPassword, firstName, lastName, email, address, sex));
    },
  };
};
*/
// eslint-disable-next-line import/no-mutable-exports


let ProfileForm = props => {
  const { handleSubmit, pristine, submitting, firstNameValue, lastNameValue, emailValue, addressValue, sexValue, birthDayValue} = props;
   const submitData =() => {
    alert(`${ birthDayValue} `);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmit)}>
        <div className={styles.AccountForm}>
          <div className={styles.first}>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>First name</label> 
                {' '}
                <label>*</label>
              </div>
              <Field name="firstName" component={myInput} label="First Name" className={styles.input} />
            </div>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>Last name</label> 
                {' '}
                <label>*</label>
              </div>
              <Field name="lastName" component={myInput} label="Last Name" className={styles.input} />
            </div>
            <div className={styles.inputMargin}>
              <div className={styles.labelBirthDay}>
                <label>Birth Day</label> 
                {' '}
                <label>*</label>
              </div>
              <Field name="birthDay" component={renderDatePicker} placeholderText="MM/DD/YYYY" className={styles.datePicker} />
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>Email</label> 
                {' '}
                <label>*</label>
              </div>
              <Field name="email" component={myInput} label="Email" className={styles.input}  />
            </div>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>Address</label> 
                {' '}
                <label>*</label>
              </div>
              <Field name="address" component={myInput} label="Address" className={styles.input} />
            </div>
            <div>
              <div className={styles.radioMargin}>
                <label>Gender</label> 
              </div>
              <div className={styles.radio}>
                <label className={styles.container}>
                  <Field name="sex" component={myInput} type="radio" value="male" className={styles.radioItem} />
                  <span className={styles.checkmark} />
                  Male
                </label>
                <label className={styles.container}>
                  <Field name="sex" component={myInput} type="radio" value="female" />
                  <span className={styles.checkmark} />
                Female
                </label>
              </div>
            </div>
            <div className={styles.btn}>
              <button type="submit" disabled={pristine || submitting} className={styles.btnProfileBack}>Back</button>
              <button type="submit" disabled={pristine || submitting} className={styles.btnProfile} onClick={submitData}>Forward</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

ProfileForm = reduxForm({
  form: 'profileForm',  // a unique identifier for this form
  validate,
  destroyOnUnmount: false,
  asyncValidate
})(ProfileForm);

ProfileForm = connect(mapStateToProps,
  /* mapDispatchToProps */)(ProfileForm);

export default ProfileForm;