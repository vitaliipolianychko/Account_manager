import React from 'react';
import Select from 'react-select';
import { ErrorMessage } from '../ErrorMessage';
import s from './styles.module.css';

export const MultiCustomStyles = {
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? ' #657C9A' : ' #657C9A',
		background: state.isSelected ? '#E7F0FF' : '#FFFFFF',
		paddingTop: 10,
		borderRadius: 0,
		border: 'none',
	}),
	control: base => ({
		...base,
		border: '1px solid #C1CFE0',
		boxShadow: 'none',
		'&:hover': {
			border: '1px solid #C1CFE0',
		},
	}),
	multiValue: base => ({
		...base,
		border: `none`,
	}),
	multiValueLabel: base => ({
		...base,
		background: '#E7F0FF',
		color: '#9BB0CB',
	}),
	multiValueRemove: base => ({
		...base,
		border: `none`,
		background: '#E7F0FF',
	}),
	dropdownIndicator: provided => ({
		...provided,
		color: '#9BB0CB',
		'&:hover': {
			color: '#9BB0CB',
		},
	}),
};

export const MultiSelect = props => {
	const { input, options, styles, meta } = props;
	return (
		<>
			<Select
				{...input}
				className={meta.touched && meta.error ? `${s.errorInput}` : null}
				isMulti
				components={{ IndicatorSeparator: () => null, Placeholder: () => null }}
				onChange={value => input.onChange(value)}
				onBlur={() => input.onBlur(input.value)}
				styles={styles}
				options={options}
				maxMenuHeight={130}
				theme={theme => ({
					...theme,
					borderRadius: 0,
				})}
			/>
			<ErrorMessage meta={meta} />
		</>
	);
};
