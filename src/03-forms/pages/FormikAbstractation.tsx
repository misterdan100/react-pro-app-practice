import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from '../components'

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

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
            <MyTextInput 
              label="First Name..."
              name="firstName" 
              placeholder="Your name"
            />

            <MyTextInput 
              label="Last Name..."
              name="lastName" 
              placeholder="Your last name"
            />

            <MyTextInput 
              label="E-mail..."
              name="email"
              type="email" 
              placeholder="correo@correo.com"
            />

            <MySelect 
              label="Job Type"
              name="jobType" 
              as='select'
            >
              <option value='' disabled>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </MySelect>

            <MyCheckbox 
              label="Terms and conditions"
              name="terms"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
