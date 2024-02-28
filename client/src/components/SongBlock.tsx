import React from 'react'
import useSongStore from '../store/activeSong'
import { Link } from 'react-router-dom'

const SongBlock = ({ song }) => {

    const { activeSong } = useSongStore()

    return (
        <div className='w-auto h-auto cursor-pointer'>
            <img onClick={() => { useSongStore.setState({ activeSong: song }) }} className='rounded-md' width={200} height={200} src={`http://localhost:4800/` + song.songCover} alt="" />
            <div className='mt-3'>
                <h2 className='text-wrap'>{song.title}</h2>
                <Link to={`/profile/${song.owner._id}`}>
                    <h2 className='text-wrap text-slate-400'>{song.owner.username}</h2>
                </Link>
            </div>
        </div>
    )
}

export default SongBlock