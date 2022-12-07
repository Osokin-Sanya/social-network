import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import dialogReduser from "./dialog-reduser";
import { usersReduser } from "./users-reduser";
import profileReduser from "./profile-reduser";
import loginReduser from "./login-reduser";

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
