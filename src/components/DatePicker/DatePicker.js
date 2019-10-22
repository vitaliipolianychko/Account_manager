import React from 'react';

// Components
import DatePicker from 'react-datepicker';

// icons 
import calendar from './icons/calendar.svg';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import styles from './DatePicker.module.css';


export const renderDatePicker = ({
	input,
	label,
  meta: { touched, error },
	...custom
}) => {
	return (
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

	);
};
