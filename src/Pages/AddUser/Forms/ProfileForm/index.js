import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

// validation Data
import asyncValidate, { validate } from '../../../../Validation/index';

// Components
import { Input } from '../../../../components/Form/Input';
import { CustomDatePicker } from '../../../../components/Form/DatePicker';
import { Button } from '../../../../components/Form/Button';

// styles
import styles from './styles.module.css';

// eslint-disable-next-line import/no-mutable-exports
let ProfileForm = ({ handleSubmit, history, updatePage }) => {
  const nextPage = () => {
    history.push('/addUser/contacts');
    updatePage(3);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(nextPage)}>
        <div className={styles.accountForm}>
          <div className={styles.first}>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>First</label>
                <label>*</label>
              </div>
              <Field
                name="firstName"
                component={Input}
                kind="default"
                label="First Name"
              />
            </div>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>Last name</label>
                <label>*</label>
              </div>
              <Field
                name="lastName"
                component={Input}
                kind="default"
                label="Last Name"
              />
            </div>
            <div className={styles.inputMargin}>
              <div className={styles.labelBirthDay}>
                <label>Birth Day</label>
              </div>
              <Field
                name="birthDay"
                component={CustomDatePicker}
                placeholderText="MM/DD/YYYY"
                className={styles.datePicker}
              />
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>Email</label>
                <label>*</label>
              </div>
              <Field
                name="email"
                component={Input}
                kind="default"
                label="Email"
              />
            </div>
            <div className={styles.inputMargin}>
              <div className={styles.label}>
                <label>Address</label>
              </div>
              <Field
                name="address"
                component={Input}
                kind="default"
                label="Address"
              />
            </div>
            <div>
              <div className={styles.radioMargin}>
                <label>Gender</label>
              </div>
              <div className={styles.radio}>
                <label className={styles.container}>
                  <Field
                    name="sex"
                    component={Input}
                    type="radio"
                    value="male"
                  />
                  <span className={styles.checkmark} />
                  Male
                </label>
                <label className={styles.container}>
                  <Field
                    name="sex"
                    component={Input}
                    type="radio"
                    value="female"
                  />
                  <span className={styles.checkmark} />
                  Female
                </label>
              </div>
            </div>
            <div className={styles.btn}>
              <Button
                type="button"
                onClick={() => {
                  history.push('/addUser/account');
                }}
              >
                Back
              </Button>
              <Button type="submit"> Forward </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

ProfileForm = reduxForm({
  form: 'WizardForm', // a unique identifier for this form
  validate,
  destroyOnUnmount: false,
  asyncValidate,
  initialValues: { sex: 'male' },
})(ProfileForm);

export default withRouter(ProfileForm);

ProfileForm.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
  updatePage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};
