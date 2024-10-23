import { ErrorMessage, Field, useField } from "formik";

interface MyTextINputProps {
    label: string
    name: string
    type?: 'text' | 'email' | 'password' | 'checkbox'
    placeholder?: string
    [x: string]: any
}

export function MyTextInput(props: MyTextINputProps) {
    const { label, name, ...restProps } = props
    const [ field] = useField(props)
  return (
    <>
      <label htmlFor={ props.id || name }>{label}</label>
      <Field type={props.type || 'text'} className="text-input" {...field} {...restProps}/>
      <ErrorMessage name={name} component='span'/>
      {/* {
        meta.touched && meta.error && (
            <span className="error">{ meta.error }</span>
        )
      } */}
    </>
  )
}
