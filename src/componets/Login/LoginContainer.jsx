import React from "react";
import { connect } from "react-redux";
import { Login } from "./Login";
import { getLogin, logout } from "../../redux/login-reduser";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    authorized: state.login.authorized,
  };
};

export default connect(mapStateToProps, { logout })(LoginContainer);
