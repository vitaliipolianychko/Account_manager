import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
// styles
import styles from './styles.module.css';

class Tabs extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    page: 1,
  };

  updatePage = value => {
    this.setState({ page: value });
  };

  render() {
    const { path, tabs } = this.props;
    const { page } = this.state;
    return (
      <div className={styles.result}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <NavLink
              to={`${tab.path}`}
              className={page > index ? styles.tabClicked : styles.tab}
              activeClassName={styles.active}
            >
              {tab.title}
            </NavLink>
          ))}
        </div>
        <div>
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={() => <Redirect to={`${path}/account`} />}
            />
            {tabs.map((tab, index) => (
              <Route
                path={`${tab.path}`}
                render={() => <tab.component updatePage={this.updatePage} />}
              />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  path: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
