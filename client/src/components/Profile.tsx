import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaylistBlock from './PlaylistBlock'
import SongBlock from './SongBlock'

const Profile = () => {

  const { id } = useParams()

  const [user, setUser] = useState({})

  const getUser = async () => {
    const responce = await axios.get(`http://localhost:4800/users/profile/${id}`)
    console.log(responce.data.user)
    setUser(responce.data.user)
    console.log(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='w-full h-full overflow-auto p-2'>
      <div className='flex flex-col h-auto'>
        <div className='flex'>
          <img src={"http://localhost:4800/" + user.profileAvatar} alt="" />
          <div>
            <h1>Имя пользователя: {user.username}</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col'>
          <h2>Плейлисты</h2>
          <div className='flex gap-x-10'>
            {user.createdPlaylists?.map((playlist) => {
              return (
                <PlaylistBlock playlist={playlist} />
              )
            })}
          </div>
        </div>
        <div className='flex flex-col mt-2'>
          <h2>Треки</h2>
          <div className='flex gap-x-10'>
            {user.uploadedSongs?.map((song) => {
              return (
                <SongBlock song={song} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile