import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myInput } from '../Field/index';
import { requiredInput, matchInput } from '../../Validation';
// import Avatar from '../svg/avatar.svg';
import "./loginForm.css";
import ImageAvatars from "../Avatar";


// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="body">
        <div className="avatar"><ImageAvatars /></div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <span>User name</span>
            <div>
              <Field
                name="username"
                component={myInput}
                type="text"
                validate={requiredInput}
              />
            </div>
            <span>Password</span>
            <div>
              <Field
                name="password"
                component={myInput}
                type="password"
                validate={[requiredInput, matchInput]}
              />
            </div>
            <span>Repeat Password</span>
            <div>
              <Field
                name="Confirmpassword"
                component={myInput}
                type="password"
                validate={[requiredInput, matchInput]}
              />
            </div>
            <button type="submit" label="submit" className="btn-submit">Forward</button>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;
