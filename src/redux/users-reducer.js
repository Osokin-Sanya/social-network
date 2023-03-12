import { usersAPI } from "../API/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAOL_COUNT_USER = "SET_TOTAOL_COUNT_USER";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOGGLE_FETCH_LOADER = "TOGGLE_FETCH_LOADER";
const TOGGLE_FETCH_SUBSCRIPTION = "TOGGLE_FETCH_SUBSCRIPTION";
const initialState = {
  users: [],
  numberPages: 5,
  currentPage: 1,
  totalPages: 0,
  sizePage: 50,
  isfetchLoader: true,
  subscriptionProcess: [],
  subProc: 0,
};

export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userID) {
            return { ...u, followed: !u.followed };
            // return { ...u, friend: true };
          }
          return u;
        }),
      };
    }

    case SET_TOTAOL_COUNT_USER: {
      return { ...state, totalPages: [action.pages] };
    }
    case CURRENT_PAGE: {
      return { ...state, currentPage: Number(action.page) };
    }
    case TOGGLE_FETCH_LOADER: {
      return { ...state, isfetchLoader: action.getLoader };
    }
    case TOGGLE_FETCH_SUBSCRIPTION: {
      return {
        ...state,
        subscriptionProcess: action.subProcess
          ? [...state.subscriptionProcess, action.userID]
          : [state.subscriptionProcess.filter((id) => id != action.userID)],
      };
    }
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userID) => ({ type: TOGGLE_FOLLOW, userID });
export const totalCount = (pages) => ({ type: SET_TOTAOL_COUNT_USER, pages });
export const pageCurrent = (page) => ({ type: CURRENT_PAGE, page });
export const toggleLoader = (getLoader) => ({
  type: TOGGLE_FETCH_LOADER,
  getLoader,
});
export const toggleSubscriptions = (subProcess, userID) => ({
  type: TOGGLE_FETCH_SUBSCRIPTION,
  subProcess,
  userID,
});

const followUnfollowFlow = (response, dispatch, userID) => {
  dispatch(toggleSubscriptions(true, userID));
  if (response.resultCode == 0) {
    dispatch(follow(userID));
    dispatch(toggleSubscriptions(false, userID));
  }
};
export const getSab = (userID) => {
  return async (dispatch) => {
    const response = await usersAPI.subscribeAPI(userID);
    followUnfollowFlow(response, dispatch, userID);
  };
};
export const getUnsab = (userID) => {
  return async (dispatch) => {
    const response = await usersAPI.unsubscribeAPI(userID);
    followUnfollowFlow(response, dispatch, userID);
  };
};

export const getUsers = (currentPage, sizePage) => {
  return async (dispatch) => {
    // dispatch(toggleLoader(true));
    // usersAPI.getUsers(currentPage, sizePage).then((data) => {
    //   dispatch(toggleLoader(false));
    //   dispatch(setUsers(data.items));
    //   dispatch(totalCount(data.totalCount));
    //   dispatch(pageCurrent(currentPage))
    // });

    dispatch(toggleLoader(true));
    const response = await usersAPI.getUsers(currentPage, sizePage);
    dispatch(toggleLoader(false));
    dispatch(setUsers(response.items));
    dispatch(totalCount(response.totalCount));
    dispatch(pageCurrent(currentPage));
  };
};
