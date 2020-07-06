import React from "react";
import "./player.css";
function Player(props) {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>credit:{props.credit}</div>
    </div>
  );
}
export default Player;
const Panel = (props) => <div className="Panel">{props.children}</div>;
