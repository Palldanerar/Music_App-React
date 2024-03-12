import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SongBlock from './SongBlock'

const PlaylistPage = () => {

    const { id } = useParams()
    const [playlist, setPlaylists] = useState({})

    const getPlaylist = async () => {
        const responce = await axios.get(`http://localhost:4800/playlists/${id}`)
        setPlaylists(responce.data)
        console.log(1)
    }

    useEffect(() => {
        getPlaylist()
    }, [id])


    return (
        <div className='p-2'>
            <div>
                <h2>Название плейлиста: {playlist.title}</h2>
                <h2>Треки</h2>
            </div>
            <div>
                <div className='flex gap-x-10'>
                    {playlist.songs?.map((song) => {
                        return (
                            <SongBlock song={song} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage