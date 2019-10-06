import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';
import { myInput } from '../Field/index';
import { requiredInput, matchInput } from '../../Validation';
import "./contactsForm.css";
import InputMask from 'react-input-mask';

const options = [
    {value: "en", label: "English"},
    {value: "fr", label: "French"},
    {value: "es", label: "Spanish"},
    {value: "ar", label: "Arabic"},
    {value: "cmn", label: "Mandarin"},
    {value: "ru", label: "Russian"},
    {value: "pt", label: "Portuguese"},
    {value: "de", label: "German"},
    {value: "ja", label: "Japanese"},
    {value: "hi", label: "Hindi"},
    {value: "ms", label: "Malay"},
    {value: "fa", label: "Persian"},
    {value: "sw", label: "Swahili"},
    {value: "ta", label: "Tamil"},
    {value: "it", label: "Italian"},
    {value: "nl", label: "Dutch"},
    {value: "tr", label: "Turkish"},
    {value: "vi", label: "Vietnamese"},
    {value: "pl", label: "Polish"},
    {value: "jv", label: "Javanese"},
    {value: "pa", label: "Punjabi"},
    {value: "th", label: "Thai"},
    {value: "ko", label: "Korean"},
  ];
// eslint-disable-next-line react/prefer-stateless-function
class ContactsForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="contactsForm">
          <div className="firstColumn">
            <span>Company</span>
            <div>
              <Field
                name="company"
                component={myInput}
                type="text"
              />
            </div>
            <span>GitHub link</span>
            <div>
              <Field
                name="github"
                component={myInput}
                type="text"
                validate={requiredInput}
              />
            </div>
            <span>FaceBook link</span>
            <div>
              <Field
                name="facebook"
                component={myInput}
                type="text"
                validate={requiredInput}
              />
            </div>
            <span>Main Language</span>
            <div className="select">
              <Select options={options} />
            </div>
          </div>
          <div className="secondColumn">
            <span>Fax</span>
            <div>
              <InputMask mask="+7 (999) 999-99-99" style={{width:300, height: 30}} />
            </div>
            <span>Phone</span>
            <div>
              <InputMask mask="+7 (999) 999-99-99" placeholder="+7(999) 999-99-99" style={{width:300, height: 30}} />
            </div>
            <span>Phone #2</span>
            <div>
              <InputMask mask="+7 (999) 999-99-99" placeholder="+7(999) 999-99-99" style={{width:300, height: 30}} />
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

ContactsForm = reduxForm({
  form: 'login',
})(ContactsForm);

export default ContactsForm;
