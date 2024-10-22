import { ErrorMessage, Field, useField } from "formik";

interface MyCheckboxProps {
    label: string
    name: string
    [x: string]: any
}

export function MyCheckbox(props: MyCheckboxProps) {
    const { label, name, ...restProps } = props
    const [ field] = useField({...props, type: 'checkbox'})

  return (
    <>
      <label htmlFor={ props.id || name }>
      <Field className="text-input" type='checkbox' {...field} {...restProps}/>
      {label}
      </label>
      <ErrorMessage name={name} component='span'/>
      {/* {
        meta.touched && meta.error && (
            <span className="error">{ meta.error }</span>
        )
      } */}
    </>
  );
}
