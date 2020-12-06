import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

const FormikContainer = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        description: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters long")
          .max(24, "Must be shorter than 24 characters")
          .required("Required"),
        email: Yup
        .string()
        .email("Invaild email address")
        .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <Form autoComplete='off'>
          <FormikControl
            control="input"
            label="Name"
            name="name"
            className="nameField"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
            className="emailField"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
            className="requestInput"
          />
          <button type="submit">
            {props.isSubmitting ? "Loading..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
