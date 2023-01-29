// Higher Order Components (HOC) are just functions that return another components.
// HOC are used for sharing Complex behaviour b/w multiple components.
//HOC can also add extra functionality to existing components.

import { Component } from "react";

function Hoc(Component) {
  return (props) => {
    console.log(props);
    return <Component {...props}></Component>;
  };
}

export default Hoc;
