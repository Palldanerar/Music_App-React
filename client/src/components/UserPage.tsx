import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {

    const { id } = useParams()

    const [user, setUser] = useState({})

    const getUser = async () => {
      const responce = await axios.get(`http://localhost:4800/users/profile/${id}`)
      console.log(responce.data.user)
      setUser(responce.data.user)
    }

    useEffect(() => {
      getUser()
    }, [])

  return (
    <div>
      <div>
        {user.username}
      </div>
    </div>
  )
}

export default UserPage