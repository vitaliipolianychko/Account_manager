import React, { Component, Fragment } from 'react';
import {SubmissionError} from 'redux-form';
import LoginForm from '../components/LoginForm';

class App extends Component {
      submit = input=>{
        if(['Настя', 'Леша', 'Миша', 'Света'].includes (input.username)){
          throw new SubmissionError ({
            username : "Имя пользователя уже существует",
          });
        }else{
          window.alert (JSON.stringify(input));
        }
    };

  render() {
    return (
      <>
      <LoginForm onSubmit={this.submit} />
      </>
    );
  }
}
export default App;
