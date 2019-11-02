import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

// Components
import { CustomInput } from '../Form/Input';
import { CustomButton } from '../Form/Button';
import { StylesSelect, CustomSelect } from '../Form/Select';
import { PhoneInput } from '../Form/PhoneInput';
import { languages } from '../../helpers/constants';
// Validation Data
import { validate } from '../../Validation';
// styles
import styles from './styles.module.css';

// eslint-disable-next-line import/no-mutable-exports
let ContactsForm = props => {
	const { handleSubmit, history, updatePage } = props;
	const nextPage = () => {
		history.push('/addUser/capabilities');
		updatePage(4);
	};
	return (
		<form onSubmit={handleSubmit(nextPage)}>
			<div className={styles.contactsForm}>
				<div className={styles.first}>
					<div className={styles.inputMargin}>
						<div className={styles.label}>
							<label>Company</label>
							<label>*</label>
						</div>
						<Field name="company" component={CustomInput} label="Company" />
					</div>
					<div className={styles.inputMargin}>
						<div>
							<label>GitHub link</label>
						</div>
						<Field name="github" component={CustomInput} label="GitHub link" />
					</div>
					<div className={styles.inputMargin}>
						<div>
							<label>Facebook link</label>
						</div>
						<Field
							name="facebook"
							component={CustomInput}
							label="Facebook link"
						/>
					</div>
					<div className={styles.inputMargin}>
						<div className={styles.lang}>
							<div className={styles.label}>
								<label>Main language</label>
								<label>*</label>
							</div>
						</div>
						<Field
							name="language"
							component={CustomSelect}
							options={languages}
							styles={StylesSelect}
						/>
					</div>
				</div>
				<div className={styles.second}>
					<span>Fax</span>
					<div className={styles.inputMargin}>
						<PhoneInput name="fax" />
					</div>
					<span>Phone#1</span>
					<div className={styles.inputMargin}>
						<PhoneInput name="phoneOne" />
					</div>
					<span>Phone#2</span>
					<div className={styles.inputMargin}>
						<PhoneInput name="phoneTwo" />
					</div>
					<div className={styles.btn}>
						<CustomButton
							type="button"
							onClick={() => {
								history.push('/addUser/profile');
							}}
						>
							Back
						</CustomButton>
						<CustomButton type="submit">Forward</CustomButton>
					</div>
				</div>
			</div>
		</form>
	);
};
ContactsForm = reduxForm({
	form: 'WizardForm', // a unique identifier for this form
	validate,
	destroyOnUnmount: false,
})(ContactsForm);

export default withRouter(ContactsForm);
