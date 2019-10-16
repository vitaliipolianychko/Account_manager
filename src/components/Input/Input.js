import React from 'react';

// styles
import styles from './Input.module.css';

export const myInput = props => {
	const { input, type, placeholder, meta, className } = props;
	return (
		<>
			<input
				{...props.input}
				type={props.type}
				placeholder={props.placeholder}
				className={props.className}
			/>

			{meta.error && meta.touched && (
				<div className={styles.error}>{meta.error}</div>
			)}
		</>
	);
};
