import { usersAPI, statusAPI } from "../componets/API/api";

const ADD_POST = "profile/ADD-POST";
const SET_PROFILE = "profile/SET_PROFILE";
const ADD_STATUS = "profile/ADD_STATUS";
const UPDATA_PHOTO = "UPDATA_PHOTO";
const PROFILE_ERROR = "PROFILE_ERROR";
const STATUS_ERROR = "STATUS_ERROR";
const LOADER_PROFILE = "LOADER_PROFILE";
let initialState = {
  postData: [
    {
      post: "post test",
      icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
    {
      post: "post test",
      icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
    {
      post: "post test",
      icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
    {
      post: "post test",
      icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
    {
      post: "post test",
      icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
  ],
  profile: null,
  status: "В обработке",
  error: false,
  statusError: false,
  loaderProfileData: null
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let addPost = {
        post: action.addPsot,
        icon: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      };
      return { ...state, postData: [...state.postData, addPost] };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case ADD_STATUS:
      return { ...state, status: action.status };
    case UPDATA_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.newPhoto },
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case STATUS_ERROR:
      return {
        ...state,
        statusError: action.error,
      };
    case LOADER_PROFILE:
      return {
        ...state,
        loaderProfileData: action.loader,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (value) => ({
  type: ADD_POST,
  addPsot: value,
});
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const getStatus = (status) => ({ type: ADD_STATUS, status });
export const updatePhoto = (newPhoto) => ({ type: UPDATA_PHOTO, newPhoto });
export const profileError = (error) => ({ type: PROFILE_ERROR, error });
export const statusError = (error) => ({ type: STATUS_ERROR, error });
export const loaderProfile = (loader) => ({ type: LOADER_PROFILE, loader });
 

export const getProfileUsers = (userId) => {
  return async (dispatch) => {
    const response = await usersAPI.getProfileUsersAPI(userId);
    dispatch(setProfile(response));
  };
};
export const getProfileStatus = (userId) => {
  return async (dispatch) => {
    const response = await statusAPI.getStatusAPI(userId);
    dispatch(getStatus(response));
  };
};
export const postProfileStatus = (status) => {
  return async (dispatch) => {
    try {
      const response = await statusAPI.postStatusAPI(status);
      if (response.data.resultCode === 0) {
        dispatch(statusError(false));
        dispatch(getStatus(status));
      }
      if (response.data.resultCode === 1) {
        dispatch(statusError(true));
      }
    } catch (error) {
      debugger;
    }
  };
};
export const updateProfilePhoto = (photo) => {
  return async (dispatch) => {
    const response = await usersAPI.updateProfilePhotoAPI(photo);
    if (response.resultCode === 0) {
      dispatch(updatePhoto(response.data.photos));
    }
  };
};

export const updateProfileData = (data) => {
  return async (dispatch, getState) => {
    const userId = getState().profile.profile.userId;
    const response = await usersAPI.updateProfileDataAPI(data);
    if (response.resultCode === 0) {
      dispatch(getProfileUsers(userId));
      dispatch(profileError(false));
      dispatch(loaderProfile(false));
    }
    if (response.resultCode === 1) {
      dispatch(profileError(response.messages[0]));
      dispatch(loaderProfile(false));
    }
  };
};

export default profileReduser;
