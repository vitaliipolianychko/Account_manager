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
            <div>
              <input
                name="Art"
                type="checkbox"
              />
              <span>Art</span>
            </div>
            <div>
              <input
                name="Sport"
                type="checkbox"
              />
              <span>Sport, fitness, aerobica and staff like that</span>
            </div>
            <div>
              <input
                name="play"
                type="checkbox"
              />
              <span>I just want to play games, I’m not living in this life</span>
            </div>
            <div>
              <input
                name="female"
                type="checkbox"
              />
              <span>I’m a female... I’m doing nothing. Every day.</span>
            </div>
            <div>
              <input
                name="Guitar"
                type="checkbox"
              />
              <span>Guitar, guitar and guitar again. I’m fall in love with it.</span>
            </div>
            <div>
              <input
                name="WTF"
                type="checkbox"
              />
              <span>WTF is “hobbies”???</span>
            </div>
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
