import React from 'react';
import {printProps} from "./printProps";
import {UserInfo} from "./UserInfo";
import {withUser} from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
    return <UserInfoWithLoader></UserInfoWithLoader>
}

export default App;