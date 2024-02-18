import React, { useEffect, useState } from 'react'
import ITrack from '../interface/ITrack'
import PlayerBlock from './PlayerBlock'
import MusicText from './MusicText'

interface TrackBlockProps {
    track: ITrack
}


const TrackBlock = ({ track }: TrackBlockProps) => {

    const [isText, setIsText] = useState(false)

    return (
        <div className='h-full bg-green-300 flex flex-col'>

            <button onClick={() => setIsText(!isText)}>Показать текст</button>

            {isText ? <MusicText text={track.text} /> : <PlayerBlock track={track} />}
        </div>
    )
}

export default TrackBlock