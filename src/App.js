import React from "react";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import {ProductInfo} from "./ProductInfo";
import {DataSource} from "./DataSource";


function App() {
  return (
    <>
    <ResourceLoader resourceUrl="/users/1" resourceName="user">
      <UserInfo></UserInfo>
    </ResourceLoader>
    <ResourceLoader resourceUrl="/products/001" resourceName="product">
      <ProductInfo></ProductInfo>
    </ResourceLoader>
    </>
  );
}

export default App;
