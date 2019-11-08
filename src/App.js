import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Form/Header';
// Pages
import AddUser from './pages/AddUser';
import ListUsers from './pages/ListUsers';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/addUser" component={AddUser} />
        <Route path="/listUsers" component={ListUsers} />
        <Redirect to="/listUsers" />
      </Switch>
    </>
  );
};
export default App;
