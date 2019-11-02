import React from 'react';
import Select from 'react-select';
import { ErrorMessage } from '../ErrorMessage';
import s from './styles.module.css';

export const StylesSelect = {
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? ' #657C9A' : ' #657C9A',
		background: state.isSelected ? '#E7F0FF' : '#FFFFFF',
		paddingTop: 10,
		borderRadius: 0,
		border: 'none',
	}),
	control: (base, state) => ({
		...base,
		border: '1px solid #C1CFE0',
		boxShadow: 'none',
		'&:hover': {
			border: '1px solid #C1CFE0',
		},
	}),
	singleValue: base => ({
		...base,
		color: '#657C9A',
	}),
};
export const CustomSelect = props => {
	const { input, options, styles, meta } = props;
	return (
		<>
			<Select
				{...input}
				components={{
					IndicatorSeparator: () => null,
					Placeholder: () => null,
				}}
				className={meta.touched && meta.error ? `${s.errorInput}` : null}
				onChange={value => input.onChange(value)}
				onBlur={() => input.onBlur(input.value)}
				options={options}
				maxMenuHeight={170}
				styles={styles}
				theme={theme => ({
					...theme,
					borderRadius: 0,
				})}
			/>
			<ErrorMessage meta={meta} />
		</>
	);
};
