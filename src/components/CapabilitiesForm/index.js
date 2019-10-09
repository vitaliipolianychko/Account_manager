import React, { Component } from 'react';
import { Field, reduxForm,formValueSelector } from 'redux-form';
import Select from 'react-select';
import "./capabilitiesForm.css";
import { connect } from 'react-redux';



const skills =[
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
];

const ReduxFormSelect = props => {
  const { input, options } = props;

  return (
    <Select 
      {...input} 
      onChange={value => input.onChange(value)} 
      onBlur={() => input.onBlur(input.value)} 
      options={options}
    />
  );
};

const selectorLogin = formValueSelector('capabilitiesForm');

const mapStateToProps = state => {
  const skillsValue = selectorLogin(state, 'skills');
  const notesValue = selectorLogin(state, 'notes');
  return {
    skillsValue, notesValue
  };
};
// eslint-disable-next-line react/prefer-stateless-function
class CapabilitiesForm extends Component {
  render() {
    const { handleSubmit, skillsValue, notesValue} = this.props;
    const submitData =()=>{
      alert(skillsValue.value);
    };
    return (
      <form onSubmit={handleSubmit}>
        <div className="CapabilitiesForm">
          <div className="firstColumn">
            <div className="lang">
              <Field
                className="lang"
                name="skills"
                component={ReduxFormSelect}
                label="Skills"
                options={skills}
              />

            </div>
            <span>Addtional information</span>
            <div>
              <Field name="notes" component="textarea" />
            </div>
          </div>
          <div className="secondColumn">
            <div>
              <button type="submit" className="btn-contacts" onClick={submitData}>
          Forward
              </button>
            </div>
          </div>
        </div>
      </form>

    );
  }
}

CapabilitiesForm = reduxForm({
  form: 'capabilitiesForm',
})(CapabilitiesForm);

CapabilitiesForm = connect(mapStateToProps)(CapabilitiesForm);

export default CapabilitiesForm;

