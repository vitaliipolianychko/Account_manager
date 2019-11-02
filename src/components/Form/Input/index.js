import React from 'react';
import { ErrorMessage } from '../ErrorMessage';
// styles
import styles from './styles.module.css';

export const CustomInput = props => {
	const { input, kind, type, placeholder, meta } = props;
	const classType = kind === 'user' ? styles.inputUser : styles.input;
	const className =
		meta.touched && meta.error
			? `${classType} ${styles.errorInput}`
			: classType;
	return (
		<>
			<input
				{...input}
				type={type}
				placeholder={placeholder}
				className={className}
			/>
			<ErrorMessage meta={meta} />
		</>
	);
};
