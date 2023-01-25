import React from "react";
import "./App.css";
import SplitScreen from "./components/SplitScreen.jsx";
import LeftComponent from "./components/LeftComponent.jsx";
import RightComponent from "./components/RightComponent.jsx";
import List from "./components/List.jsx";
import PersonList from "./list_components/PersonList";
import Modal from "./modals/Modal";

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

function App() {
  return (
    <div className="app">
      <SplitScreen
        left={LeftComponent}
        right={RightComponent}
        leftPanelWeight={1}
        rightPanelWeight={1}
      ></SplitScreen>

      <Modal>
        <List name="person" list={people} component={PersonList}></List>
      </Modal>
    </div>
  );
}

export default App;
