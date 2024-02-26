import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ activeSong }) => {
  return (
    <div className='w-full h-full bg-slate-800'>
      <AudioPlayer
        autoPlay
        src={"http://localhost:4800/" + activeSong.audioURL}
        onPlay={e => console.log("onPlay")}
      />
    </div>
  )
}

export default Player