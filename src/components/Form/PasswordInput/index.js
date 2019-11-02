import React, { useState } from 'react';
import showPass from './icons/iconVisibilityOff.svg';
import hiddenPass from './icons/iconVisibility.svg';
// styles
import styles from './styles.module.css';

export const PasswordInput = props => {
	const { input, meta } = props;
	const [password, setPassword] = useState('password');
	const checkPassword = () => {
		password === 'password' ? setPassword('text') : setPassword('password');
	};
	return (
		<>
			<div className={styles.passInput}>
				<input
					{...input}
					type={password}
					className={
						meta.touched && meta.error
							? `${styles.input} ${styles.errorInput}`
							: `${styles.input}`
					}
				/>
				<div onClick={checkPassword} className={styles.icons}>
					<img
						src={password === 'password' ? hiddenPass : showPass}
						alt="Pass"
					/>
				</div>
			</div>
			{meta.error && meta.touched && (
				<p className={styles.error}>{meta.error}</p>
			)}
		</>
	);
};
