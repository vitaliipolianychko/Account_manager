import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';
import { myInput } from '../Field/index';
import { requiredInput, matchInput } from '../../Validation';
import "./capabilitiesForm.css";



const skills =[
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
];


// eslint-disable-next-line react/prefer-stateless-function
class CapabilitiesForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="CapabilitiesForm">
          <div className="firstColumn">
            <span>Skills</span>
            <div className="select">
              <Select isMulti name="skills" options={skills} />
            </div>
            <span>Addtional information</span>
            <div>
              <textarea className="textarea" />
            </div>
          </div>
          <div className="secondColumn">
            <span>My hobbies</span>
            

          </div>
        </div>
      </form>

    );
  }
}

CapabilitiesForm = reduxForm({
  form: 'login',
})(CapabilitiesForm);

export default CapabilitiesForm;
