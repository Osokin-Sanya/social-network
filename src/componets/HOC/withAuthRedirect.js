import React from "react";
import { connect } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import LoginPageContainer from "../Login/login Page/LoginPageContainer";

let mapStateToProps = (state) => {
  return {
    authorized: state.login.authorized,
  };
};

export const authRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.authorized) return  <LoginPageContainer/>;
      return  <Component {...this.props} />;
    }
  }

  let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectRedirectComponent;
};
