import React, { Component, Suspense, lazy } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./redux/redux-store";
import { getLogin } from "./redux/login-reducer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer, {
  withRouter,
} from "./components/Profile/ProfileContainer";
import LoginPageContainer from "./components/Login/login Page/LoginPageContainer";

import { initializationAPP } from "./redux/app-reduser";
import Preloader from "./components/common/Loader/Preloader";

import "./App.css";
class App extends Component {
  componentDidMount() {
    this.props.initializationAPP();
  }
  render() {
    if (!this.props.initApp) return <Preloader />;

    const DialogsContainer = lazy(() =>
      import("./components/Dialogs/DialogsContainer")
    );

    const UsersContainer = lazy(() =>
      import("./components/Users/UsersContainer")
    );

    // window.onerror = function (message, url, line, col, error) {
    //   console.log(message);
    //   alert(message)
    // };

    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Suspense>
              <Routes>
                <Route path="/" element={<Navigate to="/Profile" />} />
                <Route path="Profile/*" element={<ProfileContainer />} />
                <Route
                  path="/Profile/:userId/*"
                  element={<ProfileContainer />}
                />
                <Route path="/Messages/" element={<DialogsContainer />} />
                <Route path="/Users/" element={<UsersContainer />} />
                <Route path="/login/" element={<LoginPageContainer />} />
                <Route path="*" element={<div>404 NOT FOUND</div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    initApp: state.app.initialization,
  };
};
const AppSocialNetwork = ({ Component }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

const AppContainer = compose(
  connect(mapStateToProps, { getLogin, initializationAPP })
)(App);
// withRouter
export default AppSocialNetwork;
