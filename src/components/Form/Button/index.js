import React from 'react';
import styles from './styles.module.css';

export const CustomButton = props => {
	const { type, children, onClick, style } = props;
	const className = type === 'submit' ? styles.btnForward : styles.btnBack;
	return (
		<button className={className} onClick={onClick} style={style}>
			{children}
		</button>
	);
};
