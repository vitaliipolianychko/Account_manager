import React from 'react';
import { Field } from 'redux-form';
import InputMask from 'react-input-mask';
import { CustomInput } from '../Input';

export const PhoneInput = props => (
	<InputMask
		mask="+7 (999) 999-99-99"
		value={props.value}
		onChange={props.onChange}
	>
		{inputProps => (
			<Field
				component={CustomInput}
				name={props.name}
				{...inputProps}
				type="tel"
				disableUnderline
			/>
		)}
	</InputMask>
);
