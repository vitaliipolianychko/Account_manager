import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

// React Components
import Select from 'react-select';

// styles
import styles from './CapabilitiesForm.module.css';

const skills = [
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
    isMulti
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    options={options}
		/>
	);
};

const selectorLogin = formValueSelector('capabilitiesForm');

const mapStateToProps = state => {
	let skillsValue = [];
	skillsValue = selectorLogin(state, 'skills');
	const notesValue = selectorLogin(state, 'notes');
	const artValue = selectorLogin(state, 'art');
	const sportValue = selectorLogin(state, 'sport');
	const justPlayValue = selectorLogin(state, 'justPlay');
	const femaleValue = selectorLogin(state, 'female');
	const guitarValue = selectorLogin(state, 'guitar');
	const wtfValue = selectorLogin(state, 'wtf');
	return {
		skillsValue,
		notesValue,
		artValue,
		sportValue,
		justPlayValue,
		femaleValue,
		guitarValue,
		wtfValue,
	};
};
// eslint-disable-next-line react/prefer-stateless-function
class CapabilitiesForm extends Component {
	render() {
		const {
			handleSubmit,
			skillsValue,
			notesValue,
			artValue,
			sportValue,
			justPlayValue,
			femaleValue,
			guitarValue,
			wtfValue,
		} = this.props;

		return (
  <form onSubmit={handleSubmit}>
    <div className={styles.CapabilitiesForm}>
      <div className={styles.first}>
        <div className={styles.skills}>
          <Field
            name="skills"
            component={ReduxFormSelect}
            label="Skills"
            options={skills}
          />
        </div>
        <span>Addtional information</span>
        <div className={styles.textArea}>
          <Field
            name="notes"
            component="textarea"
            className={styles.textArea}
          />
        </div>
      </div>
      <div className={styles.second}>
        <label className={styles.container}>
          <Field component="input" type="checkbox" name="art" value="Art" />
          <span className={styles.checkmark} />
							Art
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="sport"
            value="Sport, fitness, aerobica and staff like that"
          />
          <span className={styles.checkmark} />
							Sport, fitness, aerobica and staff like that
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="justPlay"
            value="I just want to play games, I’m not living in this life"
          />
          <span className={styles.checkmark} />
I just want to play games,
							I’m not living in this life
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="female"
            value="I’m a female... I’m doing nothing. Every day."
          />
          <span className={styles.checkmark} />
							I’m a female... I’m doing nothing. Every day.
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="guitar"
            value="Guitar, guitar and guitar again. I’m fall in love with it."
          />
          <span className={styles.checkmark} />
							Guitar, guitar and guitar again. I’m fall in love with it.
        </label>

        <label className={styles.container}>
          <Field
            component="input"
            type="checkbox"
            name="wtf"
            value="WTF is “hobbies”???"
          />
          <span className={styles.checkmark} />
							WTF is “hobbies”???
        </label>

        <div className={styles.btn}>
          <button type="submit" className={styles.btnCapabilitiesBack}>
								Back
          </button>
          <button
            type="submit"
            className={styles.btnCapabilities}
          >
								Finish
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
	destroyOnUnmount: false,
})(CapabilitiesForm);

CapabilitiesForm = connect(mapStateToProps)(CapabilitiesForm);

export default CapabilitiesForm;
