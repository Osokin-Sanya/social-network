import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  follow,
  toggleLoader,
  getUsers,
  getSab,
  getUnsab,
} from "../../redux/users-reduser";
import getProfileStatus  from "../../redux/profile-reduser"

import { Users } from "./Users";
import Preloader from "../common/Loader/Preloader";
import { authRedirectComponent } from "../HOC/withAuthRedirect";
import { compose } from "redux";
import { getDataUsers, getIsfetchLoader, getPage, getSizePage, getsubProc, getSubscriptionProcess, getTotalPages } from "../../redux/slider-reduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.sizePage);
    // this.props.toggleLoader(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.sizePage)
    //   .then((data) => {
    //     this.props.toggleLoader(false);
    //     this.props.setUsers(data.items);
    //     this.props.totalCount(data.totalCount);
    //   });
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.sizePage);
  };

  render() {
    // if (!this.props.authorized) return <Navigate to={"/login"} />;
    return (
      <>
        <div>{this.props.isfetchLoader ? <Preloader /> : null}</div>
        <Users
          // users={this.props.users}
          // follow={this.props.follow}
          // totalPages={this.props.totalPages}
          {...this.props}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users:  getDataUsers(state),
    currentPage:  getPage(state),
    totalPages: getTotalPages(state),
    sizePage: getSizePage((state)),
    isfetchLoader: getIsfetchLoader(state),
    subscriptionProcess: getSubscriptionProcess(state),
    subProc: getsubProc(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    toggleLoader,
    getUsers,
    getSab,
    getUnsab,
    getProfileStatus
  }),
  // authRedirectComponent
)(UsersContainer);

// let mapDispatchToProps = (dispatch) => {
//   return {
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     totalCount: (pages) => {
//       dispatch(totalCountAC(pages));
//     },
//     pageCurrent: (page) => {
//       dispatch(currentPageAC(page));
//     },
//     toggleLoader: (getLoader) => {
//       dispatch(toggleFetchLoaderAC(getLoader));
//     },
//   };
// };
