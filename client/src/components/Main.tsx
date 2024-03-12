import React, { useState } from 'react'
import SongBlock from './SongBlock'
import PlaylistBlock from './PlaylistBlock'

const Main = ({ songs, playlists }) => {

    const [showSongs, setShowSongs] = useState(true)
    const [showPlaylists, setShowPlaylists] = useState(false)

    const togglePlaulists = () => {
        console.log(1)
        setShowPlaylists(true)
        setShowSongs(false)
    }

    const toggleSongs = () => {
        setShowPlaylists(false)
        setShowSongs(true)
    }

    return (
        <div className='w-full h-full overflow-auto'>
            <div>
                <div className='w-full h-auto justify-center flex gap-x-3'>
                    <p style={{color: showSongs ? '#E6444F' : ''}} className='text-xl cursor-pointer' onClick={toggleSongs}>Треки</p>
                    <p style={{color: showPlaylists ? '#E6444F' : ''}}  className='text-xl cursor-pointer' onClick={togglePlaulists}>Альбомы</p>
                </div>
               {showPlaylists && <div className='flex gap-x-10 p-5'>
                    {playlists.map((playlist) => {
                        return (
                            <PlaylistBlock playlist={playlist} />
                        )
                    })}
                </div>}
               {showSongs && <div className='flex gap-x-10 p-5'>
                    {songs.map((song) => {
                        return (
                            <SongBlock song={song} />
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Main