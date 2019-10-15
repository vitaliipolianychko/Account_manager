import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddUser from "./Pages/addUser/AddUser";
import ListUsers from "./Pages/listUsers/ListUsers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/listUsers" />} />
        <Route path="/addUser" component={AddUser} />
        <Route path="/listUsers" component={ListUsers} />
      </Switch>
    );
  }
}
export default App;
