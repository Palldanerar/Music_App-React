import React, { useEffect, useState } from 'react'
import ITrack from '../interface/ITrack'
import PlayerBlock from './PlayerBlock'
import MusicText from './MusicText'

interface TrackBlockProps {
    track: ITrack | undefined;
}


const TrackBlock = ({ track }: TrackBlockProps) => {

    const [isText, setIsText] = useState(false)

    const hiddenText = () => {
        setIsText(!isText)
    }

    return (
        <div className='h-full flex flex-col'>
            {isText ? <MusicText hiddenText={hiddenText} text={track.text} /> : <PlayerBlock hiddenText={hiddenText} track={track} />}
        </div>
    )
}

export default TrackBlock