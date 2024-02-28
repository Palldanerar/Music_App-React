import React, { useState } from 'react'
import useUser from '../store/useUser'
import axios from 'axios'
import useAuthModal from '../store/useAuthModal'
import { useNavigate } from 'react-router-dom'

const AuthPage = () => {

  const navigate = useNavigate()
  const { closeModal } = useAuthModal()

  const [email, setEmail] = useState("admin")
  const [password, setPassword] = useState("admin")

  const login = async () => {
    const responce = await axios.post("http://localhost:4800/users/login", {
      email: email,
      password: password
    })
    if (responce.data.status == "success") {
      useUser.setState({ user: responce.data.user })
      closeModal()
      navigate("/")
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center bg-red-200 absolute z-10'>
      <div className='w-[600px] h-auto p-4 bg-white flex flex-col rounded-sm'>
        <h2>Войти</h2>
        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email...' />
        <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Пароль...' />
        <button onClick={login} className='bg-red-400'>Войти</button>
      </div>
    </div>
  )
}

export default AuthPage