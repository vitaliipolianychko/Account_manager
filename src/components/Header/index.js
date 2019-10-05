import React from "react";
import styles from '../Header/style.css'
// import { Link, NavLink } from "react-router-dom";

import  Logo  from "../svg/Logo.svg";
import  addUsers  from "../svg/addUsers.svg";
import listOfUsers from '../svg/listOfUsers.svg'

function Header() {
    return(
    <header className = "header">
        <div className= "header-logo"><img src={Logo} /></div>

        <div className="add-user"><img src={addUsers} /> <span>Add new user</span></div>
        <div className="list-ofUsers"><img src={listOfUsers} /> <span>List of users</span></div>
    </header>
    );
}
export default Header;