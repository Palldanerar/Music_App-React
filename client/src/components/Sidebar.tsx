import { Link } from 'react-router-dom'
import useUser from '../store/useUser';
import useAuthModal from '../store/useAuthModal';
import { useState } from 'react';
import usePlaylistModal from '../store/usePlaylistModal';

const Sidebar = () => {

  const { user } = useUser();
  const { openModal } = useAuthModal();
  const { openModalPlaylist } = usePlaylistModal()


  return (
    <div className='w-full h-full border-solid border-2 flex flex-col px-1 gap-y-2'>
      <div className='text-3xl text-[#E6444F]'>
        <Link to="/">
          Cloundfile
        </Link>
      </div>
      {user ?
        <div className='text-xl gap-y-6'>
          <Link to={`/profile/${user._id}`}>
            <h2 className='cursor-pointer'>Мой профиль</h2>
          </Link>
          <Link to="/studio">
            <h2 className='cursor-pointer'>Студия</h2>
          </Link>
          <h2 className='cursor-pointer'>Мои плейлисты</h2>
          <div className='w-full flex flex-col items-center gap-y-3'>
            {user?.createdPlaylists?.map((playlist) => {
              return (
                <Link to={`playlist/${playlist._id}`} className='w-full'>
                  <div className='w-full flex items-center'>
                    <img width={50} height={50} className='mr-2 rounded' src={"http://localhost:4800/" + playlist.playlistCover} alt="" />
                    <h2>{playlist.title}</h2>
                  </div>
                </Link>
              )
            })}
            <button onClick={openModalPlaylist} className='w-[250px] bg-red-400 py-1 mt-3 rounded-md text-white'>
              Создать
            </button>
          </div>
        </div>
        :
        <button className='w-[250px] bg-red-400 py-1 rounded-md text-white' onClick={openModal}>Войти</button>
      }
    </div>
  )
}

export default Sidebar