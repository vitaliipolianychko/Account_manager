import React from "react";
 import { NavLink } from "react-router-dom";

import  Logo  from "./icons/Logo.svg";
import  addUsers  from "./icons/addUsers.svg";
import listOfUsers from './icons/listOfUsers.svg';
import styles from'./Header.module.css';

function Header() {
    return(
      <div className={styles.headerBackground}>
        <header className={styles.header}>
          <NavLink to="/listUsers"><div className={styles.headerLogo}><img src={Logo} /></div></NavLink>
          <div className={styles.navigation}>
            <NavLink className={styles.addUser} activeClassName={styles.active} to="/addUser">
              <div>
                <img src={addUsers} /> 
                {' '}
                <span>Add new user</span>
              </div>
            </NavLink>
            <NavLink className={styles.listOfUsers} activeClassName={styles.active} to="/listUsers">
              <div>
                <img src={listOfUsers} /> 
                {' '}
                <span>List of users</span>
              </div>
            </NavLink>
          </div>
        </header>
      </div>

    );
}
export default Header;