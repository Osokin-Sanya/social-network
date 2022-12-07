import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/Profile">Profile</NavLink>
      <NavLink to="/Messages">Messages</NavLink>
      <NavLink to="/News">News</NavLink>
      <NavLink to="/Music">Music</NavLink>
      <NavLink to="/Settings">Settings</NavLink>
      <NavLink to="/Users">Finde Users</NavLink>
    </nav>
  );
};

export default Navbar;
