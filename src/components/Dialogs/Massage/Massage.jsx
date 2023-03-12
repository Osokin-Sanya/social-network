import React from "react";

import "./../Dialogs.css";

const DialogMessage = (props) => {
  return <div className="dialogMessage-item">{props.message}</div>;
};

export default DialogMessage;
