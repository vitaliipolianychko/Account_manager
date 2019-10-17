import React from 'react';

// Copmponents
import Header from '../../components/Header/Header';

import Tabs from '../../components/Tabs/Tabs';

// styles
import styles from './AddUser.module.css';

function AddUser(props) {
  const {path} = props.match;

  return (
    <div>
      <Header />
      <div className={styles.title}>
        <span>Adding new user</span>
      </div>
      <Tabs path={path} />
    </div>
	);
}
export default AddUser;
