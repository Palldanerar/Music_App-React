import React, { useState } from 'react'
import ITrack from '../interface/ITrack'

interface PlayerBlockProps {
    track: ITrack
}

const PlayerBlock = ({ track }: PlayerBlockProps) => {

    return (
        <div className='flex flex-col items-center'>
            <img className='rounded-2xl' src={track.cover} alt="" width="400px" height="400px" />
            <h2>{track.title}</h2>
            <div>
                <audio controls src={track.file}></audio>
            </div>
        </div>
    )
}

export default PlayerBlock