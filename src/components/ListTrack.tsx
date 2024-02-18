import React from 'react'
import ITrack from '../interface/ITrack'

const ListTrack = ({ changeTrack, tracks }: any) => {
    return (
        <div className='w-full h-full bg-red-300'>
            {tracks.map((track: ITrack) => {
                return (
                    <div>
                        <h2 className='cursor-pointer' onClick={() => changeTrack(track)}>{track.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTrack