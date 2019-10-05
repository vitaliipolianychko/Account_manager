import React from "react";
import {SubmissionError} from 'redux-form';
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

function AddUser() {
    const submit = input=>{
        if(['Настя', 'Леша', 'Миша', 'Света'].includes (input.username)){
          throw new SubmissionError ({
            username : "Имя пользователя уже существует",
          });
        }else{
          window.alert (JSON.stringify(input));
        }
    };
    return(
      <div>
        <Header />
        <h1>Add User Page</h1>
        <LoginForm onSubmit={submit} />
      </div>
    );
}
export default AddUser;