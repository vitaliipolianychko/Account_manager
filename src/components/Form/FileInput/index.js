import React from 'react';
import styles from './styles.module.css';

export const FileInput = ({ input }) => {
	return (
		<input
			onChange={event => {
				input.onChange(event.target.files[0]);
			}}
			type="file"
			className={styles.inputfile}
		/>
	);
};
