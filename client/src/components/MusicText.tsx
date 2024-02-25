import React from 'react'

interface MusicTextProps {
  text: String
  hiddenText(): void,
}

const MusicText = ({ text, hiddenText }: MusicTextProps) => {
  return (
    <div className='h-full text_bg overflow-auto'>
      <div onClick={() => hiddenText()} className='w-[40px] h-[40px] bg-red-200'>X</div>
      {text.split("/").map((line: String) => <p>{line}</p>)}
    </div>
  )
}

export default MusicText