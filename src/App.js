import React from "react";
import "./App.css";
import SplitScreen from "./components/SplitScreen.jsx";
import LeftComponent from "./components/LeftComponent.jsx";
import RightComponent from "./components/RightComponent.jsx";
import List from "./components/List.jsx";
import PersonList from "./list_components/PersonList";
import Modal from "./modals/Modal";
import UserLoader from "./container-components/UserLoader";
import UserInfo from "./container-components/UserInfo.jsx";
import Form from "./Form.js";
import Hoc from "./higher-order-components/Hoc";
import WithUser from "./higher-order-components/WithUser";
import { Recursive } from "./functional-programming/Recursive";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

//Recursive Component
const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

//HOC
const UserInfoWrapped = Hoc(UserInfo);
const UserInfoWithLoader = WithUser(UserInfo, "2");

function App() {
  return (
    <div className="app">
      <SplitScreen
        left={LeftComponent}
        right={RightComponent}
        leftPanelWeight={1}
        rightPanelWeight={1}
      ></SplitScreen>

      {/* <Modal>
        <List name="person" list={people} component={PersonList}></List>
      </Modal> */}

      <UserLoader userId={"1"}>
        <UserInfo></UserInfo>
      </UserLoader>

      {/* Getting data from Local Storage */}
      <h1>{localStorage.getItem("message")}</h1>
      <Form></Form>
      <h3>Higher Order Components</h3>
      <UserInfoWrapped a={1} b="Hello" c={{ name: "Gill" }}></UserInfoWrapped>
      <h3>Higher Order Components User Info With Loader</h3>
      <UserInfoWithLoader></UserInfoWithLoader>
      <h3>Recursive Component</h3>
      <Recursive data={nestedObject}/>
    </div>
  );
}

export default App;
