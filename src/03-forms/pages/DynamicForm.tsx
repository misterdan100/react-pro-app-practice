import { Formik, Form, Field } from 'formik'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components'

const initialValues: {[x: string]: any} = {}
const requiredFields: {[x: string]: any} = {}

for(const input of formJson) {
  initialValues[input.name] = input.value

  if(!input.validations) continue

  let schema = Yup.string()

  for( const rule of input.validations) {
    if(rule.type === 'required') {
      schema = schema.required(`${input.label} is required`)
    }

    if(rule.type === 'minLength') {
      const minValue = (rule as any).value || 2
      schema = schema.min(minValue, `${input.label} needs to be more than ${minValue} characteres`)
    }

    if(rule.type === 'email') {
      schema = schema.email('E-email not valid')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

export function DynamicForm() {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({type,value, ...rest}) => {

              if(type === 'input' || type === 'password' || type === 'email') {
                return <MyTextInput 
                  key={rest.name}
                  type={(type as any)} 
                  {...rest}
                />
              }

              if(type === 'select') {
                return (
                  <MySelect 
                    key={rest.name}
                    {...rest}
                  >
                    <option value=''>Select one</option>
                    {rest.options?.map( option => (
                      <option 
                        key={option.id}
                        value={option.id}
                      >
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                )
              }

              <span>Type: {type} is not available</span>

            })}
            <button type='submit'>Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  )
}