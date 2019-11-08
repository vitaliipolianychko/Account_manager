import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

// Components
import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Form/Button';
import { SingleSelect } from '../../../../components/Form/CustomSelect/SingleSelect';
import { PhoneInput } from '../../../../components/Form/PhoneInput';
import { languages } from '../../../../helpers/constants';
// Validation Data
import { validate } from '../../../../Validation';
// styles
import styles from './styles.module.css';

// eslint-disable-next-line import/no-mutable-exports
let ContactsForm = ({ handleSubmit, history, updatePage }) => {
  const nextPage = () => {
    history.push('/addUser/capabilities');
    updatePage(4);
  };
  return (
    <form onSubmit={handleSubmit(nextPage)}>
      <div className={styles.contactsForm}>
        <div className={styles.first}>
          <div className={styles.inputMargin}>
            <div className={styles.label}>
              <label>Company</label>
              <label>*</label>
            </div>
            <Field name="company" component={Input} kind="default" />
          </div>
          <div className={styles.inputMargin}>
            <div>
              <label>GitHub link</label>
            </div>
            <Field name="github" component={Input} kind="default" />
          </div>
          <div className={styles.inputMargin}>
            <div>
              <label>Facebook link</label>
            </div>
            <Field name="facebook" component={Input} kind="default" />
          </div>
          <div className={styles.inputMargin}>
            <div className={styles.lang}>
              <div className={styles.label}>
                <label>Main language</label>
                <label>*</label>
              </div>
            </div>
            <Field
              name="language"
              component={SingleSelect}
              options={languages}
            />
          </div>
        </div>
        <div className={styles.second}>
          <span>Fax</span>
          <div className={styles.inputMargin}>
            <PhoneInput name="fax" />
          </div>
          <span>Phone#1</span>
          <div className={styles.inputMargin}>
            <PhoneInput name="phoneOne" />
          </div>
          <span>Phone#2</span>
          <div className={styles.inputMargin}>
            <PhoneInput name="phoneTwo" />
          </div>
          <div className={styles.btn}>
            <Button
              type="button"
              onClick={() => {
                history.push('/addUser/profile');
              }}
            >
              Back
            </Button>
            <Button type="submit">Forward</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
ContactsForm = reduxForm({
  form: 'WizardForm', // a unique identifier for this form
  validate,
  destroyOnUnmount: false,
})(ContactsForm);

export default withRouter(ContactsForm);

ContactsForm.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
  updatePage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};
