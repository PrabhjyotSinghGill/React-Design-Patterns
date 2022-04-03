import React from "react";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <CurrentUserLoader>
      <UserInfo></UserInfo>
    </CurrentUserLoader>
  );
}

export default App;
