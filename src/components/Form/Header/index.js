import React from 'react';
import { NavLink } from 'react-router-dom';

// icons
import Logo from './icons/Logo.svg';
import addUsers from './icons/addUsers.svg';
import listOfUsers from './icons/listOfUsers.svg';

// styles
import styles from './styles.module.css';

const Header = () => {
	return (
		<div className={styles.headerBackground}>
			<header className={styles.header}>
				<NavLink to="/listUsers">
					<div className={styles.headerLogo}>
						<img src={Logo} alt="header_photo" />
					</div>
				</NavLink>
				<div className={styles.navigation}>
					<NavLink
						className={styles.addUser}
						activeClassName={styles.active}
						to="/addUser"
					>
						<div>
							<img src={addUsers} alt="add user" />
							<span>Add new user</span>
						</div>
					</NavLink>
					<NavLink
						className={styles.listOfUsers}
						activeClassName={styles.active}
						to="/listUsers"
					>
						<div>
							<img src={listOfUsers} alt="list users" />
							<span>List of users</span>
						</div>
					</NavLink>
				</div>
			</header>
		</div>
	);
};
export default Header;
