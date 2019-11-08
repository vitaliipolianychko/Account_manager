import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import asyncValidate, { validate } from '../../../../Validation';
// components
import defaultAvatar from './listOfUsers.svg';
import addAvatar from './add.svg';
import { Input } from '../../../../components/Form/Input';
import { PasswordInput } from '../../../../components/Form/PasswordInput';
import { Button } from '../../../../components/Form/Button';
import { FileInput } from '../../../../components/Form/FileInput';

// styles
import styles from './styles.module.css';

const selector = formValueSelector('WizardForm');
const mapStateToProps = state => {
  const avatarValue = selector(state, 'avatar');
  return {
    avatarValue,
  };
};

// eslint-disable-next-line import/no-mutable-exports
let AccountForm = ({ handleSubmit, avatarValue, history, updatePage }) => {
  const nextPage = () => {
    updatePage(2);
    history.push('/addUser/profile');
  };
  return (
    <form onSubmit={handleSubmit(nextPage)}>
      <div className={styles.body}>
        <div className={styles.avatar}>
          <div>
            <img
              src={
                !avatarValue ? defaultAvatar : URL.createObjectURL(avatarValue)
              }
              alt="avatar"
              className={styles.showPhoto}
            />
          </div>
          <label className={styles.customFileUpload}>
            <Field name="avatar" component={FileInput} />
            <img
              src={addAvatar}
              className={styles.addAvatarLabel}
              alt="add avatar"
            />
            add avatar
          </label>
        </div>
        <div className={styles.form}>
          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>User name</label>
              <label>*</label>
            </div>
            <Field name="userName" component={Input} kind="user" />
          </div>
          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>Password</label>
              <label>*</label>
            </div>
            <Field name="password" component={PasswordInput} />
          </div>
          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>Repeat Password</label>
              <label>*</label>
            </div>
            <Field name="confirmPassword" component={PasswordInput} />
          </div>
          <div />
          <div className={styles.btn}>
            <Button type="submit"> Forward </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

AccountForm = reduxForm({
  form: 'WizardForm', // a unique identifier for this form
  destroyOnUnmount: false,
  validate,
  asyncValidate,
})(AccountForm);
AccountForm = connect(mapStateToProps)(AccountForm);

export default withRouter(AccountForm);

AccountForm.defaultProps = {
  avatarValue: '',
};

AccountForm.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
  updatePage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  avatarValue: PropTypes.string,
};
