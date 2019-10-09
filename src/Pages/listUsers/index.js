import React from "react";
import Header from "../../components/Header";
import CustomizedTables from "../../components/ListOfUsers/index";


function ListUsers() {
    return(
      <div>
        <Header />
        <CustomizedTables />
      </div>
    );
}
export default ListUsers;