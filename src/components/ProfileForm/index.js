/* import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-date-picker';
import { myInput } from '../Field/index';
// import { requiredInput, matchInput } from '../../Validation';
import "./profileForm.css";


// eslint-disable-next-line react/prefer-stateless-function
class ProfileForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="AccountForm">
          <div className="firstColumn">
            <span>First name</span>
            <div>
              <Field
                name="firstname"
                component={myInput}
                type="text"
                // validate={requiredInput}
              />
            </div>
            <span>Last name</span>
            <div>
              <Field
                name="lastname"
                component={myInput}
                type="text"
                // validate={[requiredInput, matchInput]}
              />
            </div>
            <span>Birth Date</span>
            <div>
              <DatePicker />
            </div>
          </div>
          <div className="secondColumn">
            <span>Email</span>
            <div>
              <Field
                name="email"
                component={myInput}
                type="email"
                // validate={[requiredInput, matchInput]}
              />
            </div>
            <span>Address</span>
            <div>
              <Field
                name="addres"
                component={myInput}
                type="text"
                // validate={[requiredInput, matchInput]}
              />
            </div>
            <span>Gender</span>
            <div className="radio">
              <div>
                <label>
                  <input type="radio" value="option1" checked />
            Male
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="option2" />
            Female
                </label>
              </div>
            </div>
            <div className="btn-container">
              <div>
                <button type="submit" label="back" className="btn-submit">Back</button>
              </div>
              <div>
                <button type="submit" label="submit" className="btn-submit">Forward</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    );
  }
}

ProfileForm = reduxForm({
  form: 'login',
})(ProfileForm);

export default ProfileForm;
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import asyncValidate from '../../Validation/index';

const validate = values => {
  const errors = {};
  const requiredFields = [ 'firstName', 'lastName', 'email', 'favoriteColor', 'notes' ];
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
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={!!input.value}
    onCheck={input.onChange} 
  />
);


const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderTextField} label="First Name" />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={RadioGroup}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div>
        <Field name="notes" component={renderTextField} label="Notes" multiLine rows={2} />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm);