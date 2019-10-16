import React from 'react';

// Components
import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

export const renderDatePicker = ({
	input,
	label,
	meta: { touched, error },
	...custom
}) => {
	return (
		<DatePicker
			onChange={input.onChange}
			{...custom}
			dateForm="MM/DD/YYYY"
			selected={input.value}
		/>
	);
};
