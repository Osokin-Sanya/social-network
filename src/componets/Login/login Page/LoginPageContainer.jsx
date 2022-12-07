import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from "formik";
import * as Yup from "yup";
import { postlogin, getLogin } from "../../../redux/login-reduser";
import { NavLink, Navigate } from "react-router-dom";

import "../Login.css";
class LoginPageContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm
          login={this.props.postlogin}
          authorized={this.props.authorized}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.profile.status,
    authorized: state.login.authorized,
  };
};

export default connect(mapStateToProps, { postlogin, getLogin })(
  LoginPageContainer
);

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className={`text-input, ${
          meta.touched && !field.value ? "input-touched" : null
        }`}
        {...field}
        {...props}
      />
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const LoginForm = (props) => {
  if (props.authorized) return <Navigate to="/profile" />;
  return (
    <>
      <Formik
        initialValues={{
          // login: "",s
          email: "",
          password: "",
          // controlPassword: "",
          rememberMe: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          // login: Yup.string()
          //   .max(15, "Must be 15 characters or less")
          //   .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          // controlPassword: Yup.string().oneOf(
          //   [Yup.ref("password")],
          //   "Пароли не совпадают"
          // ),
        })}
        onSubmit={(values) => {
          props.login(values);
        }}
      >
        <Form>
          <div>
            <MyTextInput
              label="Email Address"
              name="email"
              type="text"
              placeholder="SlavaUkraine@gmail.ua"
            />
          </div>
          {/* <div>
            <MyTextInput
              label="Login"
              name="login"
              type="text"
              placeholder="login"
            />
          </div> */}
          <div>
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
          {/* <div>
            <MyTextInput
              label="Repeat password"
              name="controlPassword"
              type="password"
              placeholder="password"
            />
          </div> */}

          <MyCheckbox name="rememberMe">
            Хочешь что бы тебя запомнили?
          </MyCheckbox>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
