import { Form, Formik } from "formik";
import * as Yup from "yup";
import RegisterInputs from "../components/RegisterInputs";
import "../styles/styles.css";

export default function RegisterFormikPage() {
  const initialValues = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        // onReset={}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Name should have more than 2 characteres")
            .max(15, "Name should be less than 15 characteres")
            .required("Name is required"),
          email: Yup.string()
            .email("E-mail not valid")
            .required("E-mail is required"),
          password1: Yup.string()
            .min(6, "Password should have more than 6 characteres")
            .required("Password is required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords dont match")
            .required("Password is required"),
        })}
      >
        {(formik) => (
          <Form>
            <RegisterInputs label="Name" name="name" />
            <RegisterInputs label="E-mail" name="email" />
            <RegisterInputs label="Password" name="password1" type="password" />
            <RegisterInputs label="Repeat Password" name="password2" type="password" />

            <button type="submit">Create</button>

            <button type="button" onClick={() => formik.resetForm()}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
