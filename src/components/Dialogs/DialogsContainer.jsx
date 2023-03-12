import React from "react";
import { connect } from "react-redux";
import { addMassageActionCreator } from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import MyContext from "../../storeContext";

import "./Dialogs.css";

// const DialogsContainer2 = (props) => {
//   return (
//     <MyContext.Consumer>
//       {(store) => {
//         let addMessageState = (value) => {
//           store.dispatch(addMassageActionCreator(value));
//         };
//         return (
//           <Dialogs
//             addMessage={addMessageState}
//             state={store.getState().dialog}
//           />
//         );
//       }}
//     </MyContext.Consumer>
//   );
// };

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
