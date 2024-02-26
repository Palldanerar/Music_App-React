import React from 'react'
import PlaylistLine from './PlaylistLine'
import SongBlock from './SongBlock'

const Main = ({ songs }) => {
    return (
        <div className='w-full h-full overflow-auto'>
            <div>
                <PlaylistLine />
            </div>
            <div>
                <h2 className='text-2xl px-5'>Треки для вас</h2>
                <div className='flex gap-x-10 p-5'>
                    {songs.map((song) => {
                        return (
                            <SongBlock song={song} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main