import React, { useEffect, useState } from 'react'
import useSongStore from '../store/activeSong'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useUser from '../store/useUser'

const SongBlock = ({ song }) => {

    const { activeSong } = useSongStore()

    const { user } = useUser()

    const getOwner = async () => {
        const responce = await axios.get(`http://localhost:4800/users/profile/${song.owner._id}`)

        setOwner(responce.data)
    }

    const pushSongOnPlaylist = async (id) => {
        console.log(id)
        const responce = await axios.put(`http://localhost:4800/playlists/add/${id}`, {
            songId: song._id
        })

        console.log(responce.data)
    }

    useEffect(() => {
        getOwner()
    }, [])


    return (
        <div className='w-auto h-auto cursor-pointer'>
            <img onClick={() => { useSongStore.setState({ activeSong: song }) }} className='rounded-md' width={200} height={200} src={`http://localhost:4800/` + song.songCover} alt="" />
            <div className='mt-3'>
                <h2 className='text-wrap'>{song.title}</h2>
                <Link to={`/profile/${song.owner._id}`}>
                    <h2 className='text-wrap text-slate-400'>{song.owner.username}</h2>
                </Link>
                {
                    user ?
                    <div>
                        <p>Добавить</p>
                    <select onChange={(e) => {pushSongOnPlaylist(e.target.value)}}>
                    <option>Выберете плейлист</option>
                    {user?.createdPlaylists?.map((playlist => {
                        return (
                            <option value={playlist._id}>{playlist.title}</option>
                        )
                    }))}
                </select>
                    </div>
            : <div></div>

                }
        </div>
        </div >
    )
}

export default SongBlock