export const getDataUsers = (state) => {
  return state.usersPage.users;
};

export const getPage = (state) => {
  return state.usersPage.currentPage;
};

export const getTotalPages = (state) => {
  return state.usersPage.totalPages;
};
export const getSizePage = (state) => {
  return state.usersPage.sizePage;
};
export const getIsfetchLoader = (state) => {
  return state.usersPage.isfetchLoader;
};
export const getSubscriptionProcess = (state) => {
  return state.usersPage.subscriptionProcess;
};
export const getsubProc = (state) => {
  return state.usersPage.subProc;
};
