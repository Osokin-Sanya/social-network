import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import dialogReduser from "./dialog-reducer";
import { usersReduser } from "./users-reducer";
import profileReduser from "./profile-reducer";
import loginReduser from "./login-reducer";

import thunk from "redux-thunk";
import appReduser from "./app-reduser";

let redusers = combineReducers({
  dialog: dialogReduser,
  profile: profileReduser,
  usersPage: usersReduser,
  login: loginReduser,
  app: appReduser,
});
let store = legacy_createStore(redusers, applyMiddleware(thunk));
window.store = store;
export default store;
