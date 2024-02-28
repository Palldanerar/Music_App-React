import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistBlock = ({ playlist }) => {

    console.log(playlist)

    return (
        <Link to={`/playlist/${playlist._id}`}>
            <div className='w-auto h-auto cursor-pointer'>
                <img className='rounded-md' width={200} height={200} src={`http://localhost:4800/` + playlist.playlistCover} alt="" />
                <div className='mt-3'>
                    <h2 className='text-wrap'>{playlist.title}</h2>
                    <h2 className='text-wrap text-slate-400'>{playlist.creator.username}</h2>
                </div>
            </div>
        </Link>
    )
}

export default PlaylistBlock