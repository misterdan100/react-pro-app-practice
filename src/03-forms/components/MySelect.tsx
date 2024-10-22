import { ErrorMessage, Field, useField } from "formik"

interface MySelectProps {
    label: string
    name: string
    [x: string]: any
}

export function MySelect(props: MySelectProps) {
    const { label, name, ...restProps } = props
    const [ field ] = useField(props)
  return (
    <>
        <label htmlFor={ props.id || name }>{label}</label>
        <Field type={'select'} className='text-input' {...field} {...restProps}/>
        <ErrorMessage name={name} component='span'/>
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        } */}
    </>
  )
}