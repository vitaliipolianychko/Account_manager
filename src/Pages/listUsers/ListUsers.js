import React from "react";
import Header from "../../components/Header/Header";
import CustomizedTables from "../../components/ListOfUsers/ListOfUsers";
import styles from './ListUsers.module.css';


function ListUsers() {
    return(
      <div>
        <Header />
        <div className={styles.title}>
          <span>List of users</span>
        </div>
        <CustomizedTables />
      </div>
    );
}
export default ListUsers;