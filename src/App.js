import React from "react";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = url => async () =>{
  const response = await axios.get(url);
  return response.data;  
}


function App() {
  return (
    <>
      <DataSource
        getDataFunc={getServerData('/users/1')}
        resourceName="user"
      >
        <UserInfo></UserInfo>
      </DataSource>
    </>
  );
}

export default App;
