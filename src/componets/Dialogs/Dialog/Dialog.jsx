import React from "react";
import { NavLink } from "react-router-dom";
import "./../Dialogs.css";

const DialogName = (props) => {
  let path = "/Messages/" + props.id;
  return (
    <div className="dialogName-item">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogName;
