import { ChangeEvent, FormEvent, useState } from 'react'
// import '../styles/styles.css'

export default function RegisterPage() {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })

    const { name, email, password1, password2 } = registerData

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        

        setRegisterData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(registerData)
        if(Object.values(registerData).includes('')) {
            console.log('faltan...................................')
        }

    }

  return (
    <div>
      <h1>Register Page</h1>

      <form
        onSubmit={handleSubmit}
      >
        <input  
            type="text"
            placeholder="Name"
            name='name'
            value={name}
            onChange={onChange}
        />
        
        <input  
            type="text"
            placeholder="Email"
            name='email'
            value={email}
            onChange={onChange}
        />
        <input  
            type="password"
            placeholder="Password"
            name='password1'
            value={password1}
            onChange={onChange}
        />
        <input  
            type="password"
            placeholder="Repeat Password"
            name='password2'
            value={password2}
            onChange={onChange}
        />

        <button
            type="submit"
        >Create</button>

      </form>
    </div>
  )
}