import React from "react";
import { NavLink, Navigate } from "react-router-dom";

import "./Login.css";

export const Login = (props) => {
  const logout = () => {
    props.logout();
  };
  return (
    <>
      {props.authorized === true ? (
        <NavLink to="/Profile" className="navLogin">
          <div>
            <div className="login">Ты в сети!</div>
            <button onClick={logout} className="logout">
              Выход
            </button>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/login" className="navLogin">
          <div className="login">login</div>
        </NavLink>
      )}
    </>
  );
};
