import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MultiCustomStyles, MultiSelect } from '../Form/MultiSelect';
import { CustomButton } from '../Form/Button';
import { skill } from '../../helpers/constants';
import { validate } from '../../Validation';
// Actions
import { onAddUser } from '../../redux/actions';
// styles
import styles from './styles.module.css';

const mapDispatchToProps = dispatch => {
	return {
		AddUser: values => {
			dispatch(onAddUser(values));
		},
	};
};
// eslint-disable-next-line react/prefer-stateless-function
class CapabilitiesForm extends Component {
	render() {
		const { handleSubmit, AddUser, history } = this.props;
		const submitData = values => {
			AddUser(values);
			history.push('/listUsers');
		};
		return (
			<form onSubmit={handleSubmit(submitData)}>
				<div className={styles.CapabilitiesForm}>
					<div className={styles.first}>
						<div className={styles.skills}>
							<div className={styles.label}>
								<div className={styles.labelRequired}>
									<label>Skills</label>
									<label>*</label>
								</div>
							</div>
							<Field
								name="skills"
								component={MultiSelect}
								label="Skills"
								options={skill}
								styles={MultiCustomStyles}
							/>
						</div>
						<div>
							<div className={styles.label}>
								<label>Additional information</label>
							</div>
							<Field
								name="notes"
								component="textarea"
								className={styles.textArea}
							/>
						</div>
					</div>
					<div className={styles.second}>
						<div className={styles.hobbiesContainer}>
							<label>My hobbies</label>
						</div>
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
							<span className={styles.checkmark} />I just want to play games,
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
							<CustomButton
								type="button"
								onClick={() => {
									history.push('/addUser/contacts');
								}}
							>
								Back
							</CustomButton>
							<CustomButton type="submit" style={{ background: '#4EE4A5' }}>
								Finish
							</CustomButton>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
CapabilitiesForm = reduxForm({
	form: 'WizardForm',
	validate,
	destroyOnUnmount: false,
})(CapabilitiesForm);
CapabilitiesForm = connect(
	null,
	mapDispatchToProps
)(CapabilitiesForm);
export default withRouter(CapabilitiesForm);
