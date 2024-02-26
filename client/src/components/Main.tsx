import React from 'react'

const Main = ({ songs }) => {
    return (
        <div className='w-full h-full bg-yellow-300'>
            {songs.map((song) => {
                return (
                    <h2>{song.title}</h2>
                )
            })}
        </div>
    )
}

export default Main