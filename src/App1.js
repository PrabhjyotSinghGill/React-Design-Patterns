import React from 'react';
import {SplitScreen} from "./SplitScreen";

const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor:'#9c4952', color:'white'}}>{name}</h1>
}

const RightHandComponent = ({message}) => {
  return <h1 style={{backgroundColor:'#f8986d', color:'white'}}>{message}</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Gill"></LeftHandComponent>
      <RightHandComponent message="hello"></RightHandComponent>
    </SplitScreen>
  );
}

export default App;
