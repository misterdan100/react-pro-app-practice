import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponent = () => {
  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
          terms: Yup.boolean()
            .isTrue('Terms needs to be accepted'),
          jobType: Yup.string()
            .notOneOf(['designer'], 'This option is not available')
            .required('Select one option')
        })}
      >
        {(formik) => (
          <Form >
            <label htmlFor="firstName">First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name="firstName" component='span' />

            <label htmlFor="lastName">First Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name="lastName" component='span' />

            <label htmlFor="email">E-mail</label>
            <Field name='email' type='text' />
            <ErrorMessage name="email" component='span' />

            <label htmlFor="jobType">Job Type</label>
            <Field name='jobType' as='select' >
              <option value='' disabled>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component='span' />

            <label htmlFor="terms">
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component='span' />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
