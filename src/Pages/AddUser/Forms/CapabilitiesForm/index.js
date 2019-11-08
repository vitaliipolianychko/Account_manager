import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MultiSelect } from '../../../../components/Form/CustomSelect/MultiSelect';
import { Button } from '../../../../components/Form/Button';
import { skill } from '../../../../helpers/constants';
import { validate } from '../../../../Validation';
// Actions
import { addUserAction } from '../../../../redux/actions';
// styles
import styles from './styles.module.css';

const generateUniqueId = require('uuid/v1');

const mapDispatchToProps = dispatch => {
  return {
    addUser: (values, userId) => {
      dispatch(addUserAction(values, userId));
    },
  };
};
// eslint-disable-next-line react/prefer-stateless-function
let CapabilitiesForm = ({ handleSubmit, addUser, history }) => {
  const submitData = values => {
    const userId = generateUniqueId();
    addUser(values, userId);
    history.push('/listUsers');
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className={styles.capabilitiesForm}>
        <div className={styles.first}>
          <div className={styles.skills}>
            <div className={styles.label}>
              <div className={styles.labelRequired}>
                <label>Skills</label>
                <label>*</label>
              </div>
            </div>
            <Field
              name="skills"
              component={MultiSelect}
              label="Skills"
              options={skill}
            />
          </div>
          <div>
            <div className={styles.label}>
              <label>Additional information</label>
            </div>
            <Field
              name="notes"
              component="textarea"
              className={styles.textArea}
            />
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.hobbiesContainer}>
            <label>My hobbies</label>
          </div>
          <label className={styles.container}>
            <Field component="input" type="checkbox" name="art" value="Art" />
            <span className={styles.checkmark} />
            Art
          </label>
          <label className={styles.container}>
            <Field
              component="input"
              type="checkbox"
              name="sport"
              value="Sport, fitness, aerobica and staff like that"
            />
            <span className={styles.checkmark} />
            Sport, fitness, aerobica and staff like that
          </label>
          <label className={styles.container}>
            <Field
              component="input"
              type="checkbox"
              name="justPlay"
              value="I just want to play games, I’m not living in this life"
            />
            <span className={styles.checkmark} />
I just want to play games, I’m
            not living in this life
</label>
          <label className={styles.container}>
            <Field
              component="input"
              type="checkbox"
              name="female"
              value="I’m a female... I’m doing nothing. Every day."
            />
            <span className={styles.checkmark} />
            I’m a female... I’m doing nothing. Every day.
          </label>
          <label className={styles.container}>
            <Field
              component="input"
              type="checkbox"
              name="guitar"
              value="Guitar, guitar and guitar again. I’m fall in love with it."
            />
            <span className={styles.checkmark} />
            Guitar, guitar and guitar again. I’m fall in love with it.
          </label>
          <label className={styles.container}>
            <Field
              component="input"
              type="checkbox"
              name="wtf"
              value="WTF is “hobbies”???"
            />
            <span className={styles.checkmark} />
            WTF is “hobbies”???
          </label>
          <div className={styles.btn}>
            <Button
              type="button"
              onClick={() => {
                history.push('/addUser/contacts');
              }}
            >
              Back
            </Button>
            <Button type="submit" style={{ background: '#4EE4A5' }}>
              Finish
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
CapabilitiesForm = reduxForm({
  form: 'WizardForm',
  validate,
  destroyOnUnmount: false,
})(CapabilitiesForm);
CapabilitiesForm = connect(
  null,
  mapDispatchToProps
)(CapabilitiesForm);
export default withRouter(CapabilitiesForm);

CapabilitiesForm.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
  addUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};
