import React from 'react'
import PlaylistBlock from './PlaylistBlock'

const PlaylistLine = () => {
  return (
    <div className='w-full h-auto px-5'>
        <h2 className='text-2xl'>Подборки для вас</h2>
        <div className='w-full flex justify-between items-center gap-6 flex-wrap py-5'>
          <PlaylistBlock />
          <PlaylistBlock />
          <PlaylistBlock />
          <PlaylistBlock />
        </div>
    </div>
  )
}

export default PlaylistLine