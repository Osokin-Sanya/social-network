import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "66d8bae1-a1ca-47b9-9130-73e49368e5a0",
  },
});
export const usersAPI = {
  getUsers(currentPage, sizePage) {
    return instance
      .get(`users?page=${currentPage}&count=${sizePage}`)
      .then((res) => {
        return res.data;
      });
  },
  unsubscribeAPI(id) {
    return instance.delete(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
  subscribeAPI(id) {
    return instance.post(`follow/${id}`).then((res) => {
      return res.data;
    });
  },

  getProfileUsersAPI(userId) {
    return instance.get(`profile/${userId}`).then((res) => {
      return res.data;
    });
  },
  updateProfilePhotoAPI(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put("/profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        return res.data;
      });
  },

  updateProfileDataAPI(data) {
    return instance.put(`profile/`, data).then((res) => {
      return res.data;
    });
  },
};

export const loginAPI = {
  getloginAPI(props) {
    return instance.get(`auth/me/`).then((res) => {
      return res.data;
    });
  },
  postloginAPI(login) {
    return instance.post(`/auth/login`, login).then((res) => {
      // console.log(res);
      return res.data;
    });
  },
  logoutAPI() {
    return instance.delete(`/auth/login`);
  },
};

export const statusAPI = {
  getStatusAPI(userId) {
    return instance.get(`profile/status/${userId}`).then((res) => {
      return res.data;
    });
  },
  postStatusAPI(status) {
    return instance.put(`/profile/status`, { status: status });
  },
};

// 24953
