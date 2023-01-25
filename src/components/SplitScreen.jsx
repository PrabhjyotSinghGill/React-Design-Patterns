import React from "react";
import "../views/SplitScreen.css";

//SplitScreen Component
//Props being passed to Split Screen Component
//props are basically COMPONENTS(Left & Right) so they are renamed in Capital Letters as to follow the convention
//Left and Right are basically the components being passed as a prop to the Main Component SplitScreen here
function SplitScreen({ left: Left, right: Right }) {
  return (
    <div className="container">
      <div className="panel">
        <Left></Left>
      </div>
      <div className="panel">
        <Right></Right>
      </div>
    </div>
  );
}

export default SplitScreen;
