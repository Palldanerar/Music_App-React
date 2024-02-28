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
    }

    useEffect(() => {
        getPlaylist()
    }, [])


    return (
        <div>
            <div>
                {playlist.title}
            </div>
            <div>
                <div className='flex gap-x-10 p-5'>
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