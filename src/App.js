import React from "react";
import "./App.css";
import SplitScreen from "./components/SplitScreen.jsx";
import LeftComponent from "./components/LeftComponent.jsx";
import RightComponent from "./components/RightComponent.jsx";

function App() {
  return (
    <div className="app">
      <SplitScreen left={LeftComponent} right={RightComponent}></SplitScreen>
    </div>
  );
}

export default App;
