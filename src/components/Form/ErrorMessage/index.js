import React from 'react';
// styles
import styles from './styles.module.css';

export const ErrorMessage = props => {
	const { meta } = props;
	return (
		<>
			{meta.error && meta.touched && (
				<div className={styles.error}>{meta.error}</div>
			)}
		</>
	);
};
