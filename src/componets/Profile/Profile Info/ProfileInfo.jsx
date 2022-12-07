import React, { useState } from "react";
import Preloader from "../../common/Loader/Preloader";
import Back from "./../../../img/back.png";
import Avatarka from "./../../../img/avatarka.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";

import "./ProfileInfo.css";

const ProfileInfo = (props) => {
  const [hover, setHover] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.lenght) {
    }
    props.updateProfilePhoto(e.target.files[0]);
  };

  return (
    <>
      <div className="profile">
        <img src={Back} />
        <a href="#">My posts</a>
      </div>
      <div
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{ width: "200px", position: "relative" }}
      >
        <img
          onMouseEnter={() => {
            setHover(true);
          }}
          src={props.profile.photos.large || Avatarka}
          alt="user"
        />
        {!props.isOwner && (
          <input
            className={`addPhoto ${hover && "addPhotoActive"}`}
            type="file"
            onChange={onMainPhotoSelected}
          />
        )}
      </div>
      <ProfileStatus
        status={props.status}
        postProfileStatus={props.postProfileStatus}
        statusError={props.statusError}
      />
      <ProfileData
        profile={props.profile}
        updateProfileData={props.updateProfileData}
        isOwner={props.isOwner}
        error={props.error}
        loaderProfileData={props.loaderProfileData}
        loaderProfile={props.loaderProfile}
        
      />
    </>
  );
};

export default ProfileInfo;
