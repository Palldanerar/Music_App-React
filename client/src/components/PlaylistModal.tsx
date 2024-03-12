import React, { useState } from 'react'
import useUser from '../store/useUser'
import usePlaylistModal from '../store/usePlaylistModal'
import axios from 'axios'

const PlaylistModal = () => {

    const { user } = useUser()
    const { closeModalPlaylist } = usePlaylistModal()

    const [title, setTitle] = useState("")
    const [coverFile, setCoverFile] = useState(null)

    const create = async () => {
        const form = new FormData();
        form.append('title', title);
        form.append('userId', user._id);
        form.append('playlistCover', coverFile);

        const responce = await axios.post("http://localhost:4800/playlists/create", form)
        console.log(responce)

        closeModalPlaylist()
    }

  return (
    <div className='w-full h-full flex justify-center items-center bg-[#E6444F] absolute z-10'>
            <div className='w-[600px] h-auto p-4 bg-white flex flex-col rounded-sm gap-y-2'>
                <h2 className='text-center'>Новый плейлист</h2>
                <input className='w-full p-2 rounded-lg border-solid border-2' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Title...' />
                <input type="file" onChange={(e) => { setCoverFile(e.target.files[0]) }} name='playlistCover' placeholder='Файл' />
                <button onClick={create} className='bg-[#E6444F] p-2 rounded-lg text-white'>Создать</button>
            </div>
        </div>
  )
}

export default PlaylistModal;