import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

// validation Data
import asyncValidate, { validate } from '../../Validation/index';

// Components
import { CustomInput } from '../Form/Input';
import { renderDatePicker } from '../Form/DatePicker';
import { CustomButton } from '../Form/Button';

// styles
import styles from './styles.module.css';

// eslint-disable-next-line import/no-mutable-exports
let ProfileForm = (props, values) => {
	const { handleSubmit, history, updatePage } = props;
	const nextPage = () => {
		history.push('/addUser/contacts');
		updatePage(3);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(nextPage)}>
				<div className={styles.AccountForm}>
					<div className={styles.first}>
						<div className={styles.inputMargin}>
							<div className={styles.label}>
								<label>First</label>
								<label>*</label>
							</div>
							<Field
								name="firstName"
								component={CustomInput}
								label="First Name"
								className={styles.input}
							/>
						</div>
						<div className={styles.inputMargin}>
							<div className={styles.label}>
								<label>Last name</label>
								<label>*</label>
							</div>
							<Field
								name="lastName"
								component={CustomInput}
								label="Last Name"
								className={styles.input}
							/>
						</div>
						<div className={styles.inputMargin}>
							<div className={styles.labelBirthDay}>
								<label>Birth Day</label>
							</div>
							<Field
								name="birthDay"
								component={renderDatePicker}
								placeholderText="MM/DD/YYYY"
								className={styles.datePicker}
							/>
						</div>
					</div>
					<div className={styles.second}>
						<div className={styles.inputMargin}>
							<div className={styles.label}>
								<label>Email</label>
								<label>*</label>
							</div>
							<Field
								name="email"
								component={CustomInput}
								label="Email"
								className={styles.input}
							/>
						</div>
						<div className={styles.inputMargin}>
							<div className={styles.label}>
								<label>Address</label>
							</div>
							<Field
								name="address"
								component={CustomInput}
								label="Address"
								className={styles.input}
							/>
						</div>
						<div>
							<div className={styles.radioMargin}>
								<label>Gender</label>
							</div>
							<div className={styles.radio}>
								<label className={styles.container}>
									<Field
										name="sex"
										component={CustomInput}
										type="radio"
										value="male"
									/>
									<span className={styles.checkmark} />
									Male
								</label>
								<label className={styles.container}>
									<Field
										name="sex"
										component={CustomInput}
										type="radio"
										value="female"
									/>
									<span className={styles.checkmark} />
									Female
								</label>
							</div>
						</div>
						<div className={styles.btn}>
							<CustomButton
								type="button"
								onClick={() => {
									history.push('/addUser/account');
								}}
							>
								Back
							</CustomButton>
							<CustomButton type="submit"> Forward </CustomButton>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

ProfileForm = reduxForm({
	form: 'WizardForm', // a unique identifier for this form
	validate,
	destroyOnUnmount: false,
	asyncValidate,
	initialValues: { sex: 'male' },
})(ProfileForm);

export default withRouter(ProfileForm);
