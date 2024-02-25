import React from 'react'
import ITrack from '../interface/ITrack'
import { Link } from 'react-router-dom'

interface PlayerBlockProps {
  track: ITrack | undefined,
}

const Player = ({ track }: PlayerBlockProps) => {
  return (
    <div className='h-[80px] bg-sky-400'>
      {track ? (
        <div className='h-full flex flex justify-center items-center'>
          <Link to="/track">
            <img className='rounded-2xl' src={track.cover} alt="" width="60px" height="60px" />
          </Link>
          <h2>{track.title}</h2>
          <div>
            <audio controls src={track.file}></audio>
          </div>
        </div>
      )
        :
        (
          <h2>Выберете трек</h2>
        )}
    </div>
  )
}

export default Player