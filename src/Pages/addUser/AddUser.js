import React from 'react';

// Copmponents
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import CapabilitiesForm from '../../components/CapabilitiesForm/CapabilitiesForm';
import Tabs from '../../components/Tabs/Tabs';

// styles
import styles from './AddUser.module.css';

function AddUser(props) {
	return (
		<div>
			<Header />
			<div className={styles.title}>
				<span>Adding new user</span>
			</div>
			<Tabs>
				1. Account
				<LoginForm />
				2. Profile
				<ProfileForm />
				3. Contacts
				<ContactsForm />
				4. Capabilities
				<CapabilitiesForm />
			</Tabs>
		</div>
	);
}
export default AddUser;
