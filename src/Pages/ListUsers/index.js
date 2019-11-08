import React from 'react';
// Components
import UsersList from './Form/ListOfUsers';
// styles
import styles from './styles.module.css';

const ListUsers = () => {
  return (
    <div>
      <div className={styles.title}>
        <span>List of users</span>
      </div>
      <UsersList />
    </div>
  );
};
export default ListUsers;
