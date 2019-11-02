import React from 'react';

// Components
import DatePicker from 'react-datepicker';

// icons
import calendar from './icons/calendar.svg';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import styles from './styles.module.css';

export const renderDatePicker = ({ input, label, meta, ...custom }) => {
	return (
		<>
			<div className={styles.DateInput}>
				<DatePicker
					onChange={input.onChange}
					{...custom}
					dateForm="MM/DD/YYYY"
					selected={input.value}
				/>
				<div className={styles.iconDate}>
					<img src={calendar} alt="Date" />
				</div>
			</div>
			{meta.error && meta.touched && (
				<div className={styles.error}>{meta.error}</div>
			)}
		</>
	);
};
