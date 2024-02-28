import { Link } from 'react-router-dom'
import useUser from '../store/useUser';
import useAuthModal from '../store/useAuthModal';

const Sidebar = () => {

  const { user } = useUser();
  const { openModal } = useAuthModal();

  return (
    <div className='w-full h-full bg-blue-300'>
      {user ?
        <div>
          <Link to={`/profile/${user._id}`}>
            <h2 className='cursor-pointer'>Мой профиль</h2>
          </Link>
          <h2 className='cursor-pointer'>Избранное</h2>
          <h2 className='cursor-pointer'>Мои плейлисты</h2>
          <div>
            {user?.createdPlaylists?.map((playlist) => {
              return (
                <Link to={`playlist/${playlist._id}`}>
                  <div className='ml-3 flex h-auto items-center'>
                    <img width={50} height={50} className='mr-2 rounded' src={"http://localhost:4800/" + playlist.playlistCover} alt="" />
                    <h2>{playlist.title}</h2>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        :
        <button onClick={openModal}>Войти</button>
      }
    </div>
  )
}

export default Sidebar