import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myInput } from '../Field/index';
import { requiredInput, matchInput } from '../../Validation';
import Avatar from '../svg/avatar.svg';
import '../LoginForm/style.css'

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
      <img src={Avatar} />
      <form onSubmit={handleSubmit}>
        <div className="form">
        <Field
          name="username"
          component={myInput}
          type="text"
          placeholder="Username"
          validate={requiredInput}
        />
        <Field
          name="password"
          component={myInput}
          type="password"
          placeholder="Password"
          validate={[requiredInput, matchInput]}
        />
        <Field
          name="Confirmpassword"
          component={myInput}
          type="password"
          placeholder="Confirm password"
          validate={[requiredInput, matchInput]}
        />
        <button type="submit" label="submit">Submit</button>
        </div>
      </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;
