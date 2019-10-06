import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-date-picker';
import { myInput } from '../Field/index';
import { requiredInput, matchInput } from '../../Validation';
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
                validate={requiredInput}
              />
            </div>
            <span>Last name</span>
            <div>
              <Field
                name="lastname"
                component={myInput}
                type="text"
                validate={[requiredInput, matchInput]}
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
                validate={[requiredInput, matchInput]}
              />
            </div>
            <span>Address</span>
            <div>
              <Field
                name="addres"
                component={myInput}
                type="text"
                validate={[requiredInput, matchInput]}
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
