import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from "formik";
import * as Yup from "yup";
import Preloader from "../../common/Loader/Preloader";

import "./ProfileInfo.css";

const ProfileData = ({
  profile,
  updateProfileData,
  isOwner,
  error,
  loaderProfile,
  loaderProfileData,
}) => {
  const [edit, setEdit] = React.useState(true);

  if (loaderProfileData) return <Preloader />;

  return (
    <div className="contact-wraper">
      {error && <div> {error}</div>}
      {edit && error == false ? (
        <div>
          <div>
            <b>Full name: </b>
            {profile.fullName}
          </div>
          <div>
            <b>About me: </b>
            {profile.aboutMe}
          </div>
          <div>
            <b>looking for job: </b>
            <>{profile.lookingForAJob ? "Yes" : "No"}</>
          </div>
          <div>
            <b>Job description: </b>
            <span style={{ fontSize: "small" }}>
              {profile.lookingForAJobDescription}
            </span>
          </div>
          <div>
            <b>Contacts: </b>
            <div className="contacts-wrapper">
              {Object.keys(profile.contacts).map((keys) => (
                <div key={keys} className="profile-contacts">
                  <div className="contacts-name">{keys}:</div>
                  <div className="contacts-item">{profile.contacts[keys]}</div>
                </div>
              ))}
            </div>
          </div>
          {edit && !isOwner && (
            <button onClick={() => setEdit(false)}>Edit</button>
          )}
        </div>
      ) : (
        <div>
          <LoginForm
            profile={profile}
            updateProfileData={updateProfileData}
            isOwner={isOwner}
            edit={edit}
            setEdit={setEdit}
            error={error}
            loaderProfile={loaderProfile}
          />
        </div>
      )}
    </div>
  );
};

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}:</label>

      <div className="MyTextInput">
        <input
          className={`text-input, ${
            meta.touched && !field.value ? "input-touched" : null
          }`}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const LoginForm = ({
  profile,
  updateProfileData,
  isOwner,
  edit,
  setEdit,
  error,
  loaderProfile,
}) => {
  React.useEffect(() => {
    if (error !== false) {
      setEdit(false);
    }
  }, [error]);

  function setEditFunc() {
    setEdit(true);
    loaderProfile(true);
  }

  return (
    <>
      <Formik
        initialValues={{
          contacts: {
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink,
          },
          fullName: profile.fullName,
          aboutMe: profile.aboutMe,
          lookingForAJob: profile.lookingForAJob,
          lookingForAJobDescription: profile.lookingForAJobDescription,
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          // contacts: Yup.object({
          // facebook: Yup.string().matches(
          //   /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          //   "Enter correct url!"
          // ),
          // }),
        })}
        onSubmit={(values) => {
          updateProfileData(values);
          setEditFunc();
        }}
      >
        <Form>
          <div className="profile-form">
            <MyTextInput label="Full name" name="fullName" type="text" />
          </div>
          <div className="profile-form">
            <MyTextInput label="About me" name="aboutMe" type="text" />
          </div>
          <div className="profile-form">
            <MyTextInput
              label="looking for a Job"
              name="lookingForAJob"
              type="checkbox"
            />
          </div>
          <div className="profile-form">
            <MyTextInput
              label="Job description"
              name="lookingForAJobDescription"
              type="text"
            />
          </div>
          <div>
            <b>Contacts: </b>
            {Object.keys(profile.contacts).map((keys) => (
              <div key={keys} className="profile-contacts">
                <MyTextInput
                  label={keys}
                  name={"contacts." + keys}
                  type="text"
                />
              </div>
            ))}
          </div>
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </>
  );
};

export default ProfileData;
