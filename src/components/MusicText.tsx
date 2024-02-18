import React from 'react'

interface MusicTextProps {
    text: String
}

const MusicText = ({ text }: MusicTextProps) => {
  return (
    <div className='h-full overflow-auto'>
        {text.split("/").map((line: String) => <p>{line}</p>)}
    </div>
  )
}

export default MusicText