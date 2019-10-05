import React from "react";
 import { NavLink } from "react-router-dom";
import '../Header/style.css';

import  Logo  from "../svg/Logo.svg";
import  addUsers  from "../svg/addUsers.svg";
import listOfUsers from '../svg/listOfUsers.svg';

function Header() {
    return(
      <header className= "header">
      <div className="header-logo"><img src={Logo} /></div>

      <NavLink className="add-user" activeClassName='active' to="/addUser"><div >
<img src={addUsers} /> 
{' '}
<span>Add new user</span>
</div></NavLink>
<NavLink className="list-ofUsers" activeClassName='active' to="/listUsers"><div >
<img src={listOfUsers} /> 
{' '}
<span>List of users</span>
</div>
</NavLink>
    </header>
    );
}
export default Header;