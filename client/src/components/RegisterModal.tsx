import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRegisterhModal from '../store/useRegisterModal'
import useUser from '../store/useUser'
import axios from 'axios'

const RegisterModal = () => {

    const navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { closeModal } = useRegisterhModal()

    const register = async () => {
        const responce = await axios.post("http://localhost:4800/users/register", {
            username,
            email,
            password
        })

        if (responce.data.message == "User registered successfully!") {
            useUser.setState({ user: responce.data.user })
            closeModal()
            navigate("/")
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center bg-green-200 absolute z-10'>
            <div className='w-[600px] h-auto p-4 bg-white flex flex-col rounded-sm'>
                <h2>Войти</h2>
                <input type="text" value={username} onChange={(e) => { setUserName(e.target.value) }} placeholder='Username...' />
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email...' />
                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Пароль...' />
                <button onClick={register} className='bg-red-400'>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default RegisterModal