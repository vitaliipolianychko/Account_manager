import React from 'react';
// styles
import styles from './styles.module.css';

export const CustomInput = props => {
	const { input, kind, type, placeholder, meta } = props;
	const classType = kind === 'user' ? styles.inputUser : styles.input;
	const className =
		meta.touched && meta.error
			? `${classType} ${styles.errorInput}`
			: classType;
	console.log(className);
	return (
		<>
			<input
				{...input}
				type={type}
				placeholder={placeholder}
				className={className}
			/>
			{meta.error && meta.touched && (
				<div className={styles.error}>{meta.error}</div>
			)}
		</>
	);
};
