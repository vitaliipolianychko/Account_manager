import React from 'react';
// Copmponents
import Tabs from '../../components/Form/Tabs';
// styles
import styles from './styles.module.css';

const AddUser = props => {
	const { path } = props.match;

	return (
		<div>
			<div className={styles.title}>
				<span>Adding new user</span>
			</div>
			<Tabs path={path} />
		</div>
	);
};
export default AddUser;
