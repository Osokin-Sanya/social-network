import React from "react";
import "./Dialogs.css";
import DialogMessage from "./Massage/Massage";
import DialogName from "./Dialog/Dialog";

let linkMessage = React.createRef();
const Dialogs = (props) => {
  let addMessage = () => {
    let refMessage = linkMessage.current.value;
    props.addMessage(refMessage);
    linkMessage.current.value = "";
  };

  return (
    <div className="dialogs">
      <div className="dialogsName">
        {props.state.nemeData.map((name, key) => (
          <DialogName key={key} name={name.name} id={name.id} />
        ))}
      </div>
      <div className="dialogMessage">
        {props.state.messageData.map((mseg, key) => (
          <DialogMessage key={key} message={mseg.message} />
        ))}
      </div>
      <div className="dialog__Add">
        <textarea ref={linkMessage} id="" cols="30" rows="5"></textarea>
        <button onClick={addMessage}>Добавить Сообщение</button>
      </div>
    </div>
  );
};
export default Dialogs;
