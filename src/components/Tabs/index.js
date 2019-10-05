import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import {createBrowserHistory } from 'history';

function NavTabs(props) {
    const history = createBrowserHistory();
  const handleChangeTab = (e, value) => {
    history.push(value);
    console.log(history);
  };
  
  return (
    <AppBar position="static">
      <Tabs
        // eslint-disable-next-line no-restricted-globals
        value={location.pathname === '/listUsers' ? 'listUsers' : 'addUser'}
        centered
        variant="fullWidth"
        onChange={handleChangeTab}
      >
        <Tab label="List of Users User" value="listUsers" />
        <Tab label="Add User" value="addUser" />
        <Tab label="Add User" value="addUser" />
      </Tabs>
    </AppBar>
  );
}

export default NavTabs;