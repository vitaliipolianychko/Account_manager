import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Form/Header';
// Pages
import AddUser from './Pages/AddUser';
import ListUsers from './Pages/ListUsers';

class App extends Component {
	render() {
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
	}
}
export default App;
