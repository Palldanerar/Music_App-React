import React, { useEffect, useState } from 'react'
import ITrack from '../interface/ITrack'

interface TrackBlockProps {
    track: ITrack
}


const TrackBlock = ({ track }: TrackBlockProps) => {

    return (
        <div className='w-full h-full bg-green-300'>
            <h2>{track.title}</h2>
            <img src={track.cover} alt="" width="300px" height="300px" />
            <div>
                <audio controls src={track.file}></audio>
            </div>
        </div>
    )
}

export default TrackBlock