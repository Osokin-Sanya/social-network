import React from "react";
import { Field, Form, Formik, FormikProps, useField } from "formik";
import * as Yup from "yup";

const MyInput = ({ field, form, ...props }) => {
  const [fields, meta] = useField(props);
  console.log(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error"> {form.errors.status}</div>
      ) : null}
    </>
  );
};

export const Input = (props) => (
  <div>
    <Formik
      initialValues={{ status: undefined }}
      validationSchema={Yup.object({
        status: Yup.string().max(12, "Must be 15 characters or less"),
      })}
    >
      <Form>
        <Field
          onChange={() => {props.updateStatus()}}
          onBlur={props.exitOfStatus}
          name="status"
          placeholder="text"
          component={MyInput}
          defaultValue={props.defaultValue}
        />
      </Form>
    </Formik>
  </div>
);
