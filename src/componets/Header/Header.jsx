import { NavLink } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import logo from "./../../logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <NavLink to={`/Profile/`}>
        <img className="logImg" src={logo} />
      </NavLink>
      <LoginContainer />
    </header>
  );
};

export default Header;
