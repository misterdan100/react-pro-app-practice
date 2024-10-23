import { ErrorMessage, Field, useField } from "formik"

interface RegisterInputsProps {
    label: string
    name: string,
    type?: string,
    [x: string]: any
}

export default function RegisterInputs(props: RegisterInputsProps) {
    const { label, name, ...restProps } = props 
    const [ field ] = useField(props)

  return (
    <>
        <label htmlFor={name}>{label}</label>
        <Field type={props.type || 'text'} {...restProps} {...field} className='text-input'/>
        <ErrorMessage name={name} component={'span'} />
    </>
  )
}