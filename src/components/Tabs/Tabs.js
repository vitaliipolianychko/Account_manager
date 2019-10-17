import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import LoginForm from "../LoginForm/LoginForm";
import ProfileForm from "../ProfileForm/ProfileForm";
import ContactsForm from "../ContactsForm/ContactsForm";
import CapabilitiesForm from "../CapabilitiesForm/CapabilitiesForm";

// styles
import styles from './Tabs.module.css';


class Tabs extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
        page: 1, 
    };

  }

  updatePage = (value) => {
    this.setState({ page: value });
 }

  render() {
    const { path } = this.props;
    
    return (
      <div className={styles.result}>
        <div className={styles.tabs}>
          <NavLink to={`${path}/account`} className={styles.tabClicked} activeClassName={styles.active}>1. Account</NavLink>
          <NavLink to={`${path}/profile`} className={this.state.page > 1 ? `${styles.tabClicked}` : `${styles.tab}`} activeClassName={styles.active}>2. Profile</NavLink>
          <NavLink to={`${path}/contacts`} className={this.state.page > 2 ? `${styles.tabClicked}` : `${styles.tab}`} activeClassName={styles.active}>3. Contacts</NavLink>
          <NavLink to={`${path}/capabilities`} className={this.state.page > 3 ? `${styles.tabClicked}` : `${styles.tab}`} activeClassName={styles.active}>4. Capabilities</NavLink>
        </div>
        <div>
          <Switch>
            <Route exact path={`${path}`} render={() => <Redirect to={`${path}/account`} />} />
            <Route path={`${path}/account`} exact render={() => <LoginForm updatePage={this.updatePage} />} />
            <Route path={`${path}/profile`} render={()=> <ProfileForm updatePage={this.updatePage} />} />
            <Route path={`${path}/contacts`} render={()=> <ContactsForm updatePage={this.updatePage} />} />
            <Route path={`${path}/capabilities`} component={CapabilitiesForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Tabs;
