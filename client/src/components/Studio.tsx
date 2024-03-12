import React, { useState } from 'react'
import useUser from '../store/useUser'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Studio = () => {

    const navigate = useNavigate()

    const { user } = useUser();

    const [title, setTitle] = useState("")
    const [songCover, setSongCover] = useState(null);
    const [songFile, setSongFile] = useState(null);

    const publishSong = async () => {

        console.log(songCover)

        const form = new FormData();
        form.append('title', title);
        form.append('owner', user._id);
        form.append('songCover', songCover);
        form.append('songFile', songFile);

        console.log(form)

        const responce = await axios.post("http://localhost:4800/songs/upload", form)

        console.log(responce)

        navigate("/")
    }

    return (
        <div className='w-full h-full'>
            <div className='w-[600px] h-auto mx-auto flex flex-col gap-y-2'>
                <h2 className='text-[#E6444F]'>Обложка</h2>
                <input type="file" onChange={(e) => { setSongCover(e.target.files[0]) }} name='songCover' placeholder='Обложка' />
                <h2 className='text-[#E6444F]'>Файл</h2>
                <input type="file" onChange={(e) => { setSongFile(e.target.files[0]) }} name='songFile' placeholder='Файл' />
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Название' />
                <button className='bg-[#E6444F] p-2 rounded-lg text-white' onClick={publishSong}>Опубликовать</button>
            </div>
        </div>
    )
}

export default Studio