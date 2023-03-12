import React from "react";
import icon from "../../img/avatarka.jpg";
import { NavLink } from "react-router-dom";
export const UsersSubscription = ({
  users,
  getUnsab,
  getSab,
  subscriptionProcess,
}) => {
  return (
    <>
      {users.map((e) => (
        <div className="userblock" key={e.id}>
          <div className="userFollow">
            <NavLink to={`/Profile/` + e.id}>
              <div className="userIcon">
                <img src={e.photos.small != null ? e.photos.small : icon} />
              </div>
            </NavLink>
            <div className="follow">
              {e.followed ? (
                <button
                  disabled={subscriptionProcess.some((sub) => sub === e.id)}
                  onClick={() => {
                    getUnsab(e.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={subscriptionProcess.some((sub) => sub === e.id)}
                  onClick={() => {
                    getSab(e.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="userInfo">
            <div className="nameUser">{e.name}</div>
            <div className="statusUser">{e.status}</div>
          </div>
        </div>
      ))}
    </>
  );
};
