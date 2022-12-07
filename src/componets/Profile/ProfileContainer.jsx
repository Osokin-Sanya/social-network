import { useParams } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getProfileUsers,
  getProfileStatus,
  postProfileStatus,
  updateProfilePhoto,
  updateProfileData,
  loaderProfile
} from "../../redux/profile-reduser";
import Profile from "./Profile";
import { authRedirectComponent } from "../HOC/withAuthRedirect";
import Preloader from "../common/Loader/Preloader";

import "./Profile.css";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.myUser;
    }
    this.props.getProfileUsers(userId);
    this.props.getProfileStatus(userId);
  };

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, nextProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps == nextState) return false
  // }

  render() {

    if (this.props.profile != null) return <Profile isOwner={this.props.match.params.userId} {...this.props} />;

    // return <Profile isOwner={this.props.match.params.userId} {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    loaderProfileData: state.profile.loaderProfileData,
    error: state.profile.error,
    statusError: state.profile.statusError,
    status: state.profile.status,
    myUser: state.login.id,
  };
};

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

export default compose(
  connect(mapStateToProps, {
    getProfileUsers,
    getProfileStatus,
    postProfileStatus,
    updateProfilePhoto,
    updateProfileData,
    loaderProfile
  }),
  // authRedirectComponent,
  withRouter
)(ProfileContainer);
