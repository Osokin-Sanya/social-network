import { loginAPI } from "../componets/API/api";

let AUTHORIZATION = "AUTHORIZATION";
let LOGOUT_LOGIN = "LOGOUT_LOGIN";
let initialState = {
  email: null,
  id: null,
  login: null,
  authorized: false,
};

const loginReduser = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION:
      return {
        ...state,
        email: action.email,
        id: action.id,
        login: action.login,
        // ...action.data,
        authorized: action.authorized,
      };
    case LOGOUT_LOGIN:
      return {
        ...state,
        email: null,
        id: null,
        login: null,
        authorized: false,
      };

    default:
      return state;
  }
};

export const logoutAction = () => ({ type: LOGOUT_LOGIN });

export const setAuth = (id, login, email, authorized = true) => ({
  type: AUTHORIZATION,
  email,
  id,
  login,
  authorized,
});

export default loginReduser;

export const getLogin = () => async (dispatch) => {
  //  return loginAPI.getloginAPI().then((data) => {
  //   if (data.resultCode === 0) {
  //     let { id, login, email } = data.data;
  //     dispatch(setAuth(id, login, email));
  //   }
  const response = await loginAPI.getloginAPI();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuth(id, login, email));
  }
};

export const postlogin = (value) => {
  return async (dispatch) => {
    // loginAPI.postloginAPI(value).then((res) => {
    //   if (res.resultCode === 0) {
    //     dispatch(getLogin());
    //   } else {
    //     alert("Ошибка при вводе данных");
    //   }
    // });
    const response = await loginAPI.postloginAPI(value);
    if (response.resultCode === 0) {
      dispatch(getLogin());
    } else {
      alert("Ошибка при вводе данных");
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    const response = await loginAPI.logoutAPI();
    if (response.data.resultCode === 0) {
      dispatch(setAuth(null, null, null, false));
    }
  };
};
