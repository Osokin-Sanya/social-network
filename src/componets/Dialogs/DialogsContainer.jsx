import React from "react";
import "./Dialogs.css";
import { addMassageActionCreator } from "../../redux/dialog-reduser";
import Dialogs from "./Dialogs";
import MyContext from "../../storeContext";
import { connect } from "react-redux";

const DialogsContainer2 = (props) => {
  return (
    <MyContext.Consumer>
      {(store) => {
        let addMessageState = (value) => {
          store.dispatch(addMassageActionCreator(value));
        };
        return (
          <Dialogs
            addMessage={addMessageState}
            state={store.getState().dialog}
          />
        );
      }}
    </MyContext.Consumer>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.dialog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (value) => {
      dispatch(addMassageActionCreator(value));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
