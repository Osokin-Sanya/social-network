import { getLogin } from "./login-reducer";

const INIT_APP = "INIT_APP";

let initialState = {
  initialization: false,
};
const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        initialization: true,
      };
    default:
      return state;
  }
};

export const initialization = () => ({
  type: INIT_APP,
});

export const initializationAPP = () => (dispatch) => {
  let propmise = dispatch(getLogin());

  Promise.all([propmise]).then(() => {
    dispatch(initialization());
  });
};

export default appReduser;
