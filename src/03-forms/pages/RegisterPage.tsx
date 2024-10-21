import { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export default function RegisterPage() {

    const { name, email, password1, password2, formData, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })

    // const { name, email, password1, password2 } = formData

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
        if(Object.values(formData).includes('')) {
            console.log('faltan...................................')
        }

    }

  return (
    <div>
      <h1>Register Page</h1>

      <form
        onSubmit={onSubmit}
        noValidate
      >
        <input  
            type="text"
            placeholder="Name"
            name='name'
            value={name}
            onChange={onChange}
            className={`has-error`}
        />
        { name.trim().length <= 0 && <span>This field is required</span>}
        
        <input  
            type="text"
            placeholder="Email"
            name='email'
            value={email}
            onChange={onChange}
            />
        { email.trim().length <= 0 && <span>E-mail is required</span>}
        {!isValidEmail(email) && <span>E-mail not valid</span>}

        <input  
            type="password"
            placeholder="Password"
            name='password1'
            value={password1}
            onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Password is required</span>}
        {password1.trim().length > 0 && password1.trim().length < 6 && <span>Password needs at least 6 characteres</span>}

        <input  
            type="password"
            placeholder="Repeat Password"
            name='password2'
            value={password2}
            onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Password is required</span>}
        {password2.trim().length > 0 && password1.trim() !== password2.trim() && <span>Passwords don't match</span>}

        <button
            type="submit"
        >Create</button>

        <button
            type="button"
            onClick={resetForm}
        >Reset Form</button>

      </form>
    </div>
  )
}