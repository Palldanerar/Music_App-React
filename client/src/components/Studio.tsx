import React, { useState } from 'react'
import useUser from '../store/useUser'
import axios from 'axios';

const Studio = () => {

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
    }

    return (
        <div className='w-full h-full'>
            <input type="file" onChange={(e) => { setSongCover(e.target.files[0]) }} name='songCover' placeholder='Обложка' />
            <input type="file" onChange={(e) => { setSongFile(e.target.files[0]) }} name='songFile' placeholder='Файл' />
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Название' />
            <button onClick={publishSong}>Опубликовать</button>
        </div>
    )
}

export default Studio