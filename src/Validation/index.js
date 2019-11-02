const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = values => {
	return sleep(1000).then(() => {
		// simulate server latency
		if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
			// eslint-disable-next-line no-throw-literal
			throw { email: 'Email already Exists' };
		}
		if (['vetka97', 'polyana', 'Deco'].includes(values.userName)) {
			// eslint-disable-next-line no-throw-literal
			throw { userName: 'userName already Exists' };
		}
	});
};

export const validate = values => {
	const errors = {};
	const checkAge =
		(new Date().getTime() - new Date(values.birthDay)) /
		(24 * 3600 * 365.25 * 1000);
	const requiredFields = [
		'userName',
		'password',
		'confirmPassword',
		'firstName',
		'lastName',
		'email',
		'sex',
		'company',
		'language',
		'skills',
	];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
		if (values.password !== values.confirmPassword) {
			errors.confirmPassword = "Password's don't match ";
		}
		if (
			values.email &&
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}
		if (checkAge < 18) {
			errors.birthDay = 'You must be 18 or older';
		}
		if (values.skills && values.skills.length < 3) {
			errors.skills = '3 skills must be selected';
		}
	});

	return errors;
};

export default asyncValidate;
