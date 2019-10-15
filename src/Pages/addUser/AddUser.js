import React from "react";
import Header from "../../components/Header/Header";
import Tabs from "../../components/Tabs/index";
import styles from './AddUser.module.css';


function AddUser() {
    return(
      <div>
        <Header />
        <div className={styles.title}>
          <span>Adding new user</span>
        </div>
        <Tabs />
      </div>
    );
}
export default AddUser;