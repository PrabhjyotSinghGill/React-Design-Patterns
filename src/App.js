import React from 'react';
import {SplitScreen} from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor:'#9c4952'}}>Left</h1>
}

const RightHandComponent = () => {
  return <h1 style={{backgroundColor:'#f8986d'}}>Right</h1>
}

function App() {
  return (
    <SplitScreen left={LeftHandComponent} right={RightHandComponent}></SplitScreen>
  );
}

export default App;
