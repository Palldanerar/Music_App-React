import React, { useState } from 'react'
import ITrack from '../interface/ITrack'

interface PlayerBlockProps {
    track: ITrack,
    hiddenText(): void,
}

const PlayerBlock = ({ track, hiddenText }: PlayerBlockProps) => {

    return (
        <div className='h-full music_bg flex flex-col justify-center items-center'>
            <img onClick={() => hiddenText()} className='rounded-2xl' src={track.cover} alt="" width="400px" height="400px" />
            <h2>{track.title}</h2>
            <div>
                <audio controls src={track.file}></audio>
            </div>
        </div>
    )
}

export default PlayerBlock