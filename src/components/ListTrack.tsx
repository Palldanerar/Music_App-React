import React from 'react'
import ITrack from '../interface/ITrack'

const ListTrack = ({ changeTrack, tracks }: any) => {
    return (
        <div className='w-full h-full flex flex-col gap-y-3 p-2 bg-red-300'>
            {tracks.map((track: ITrack) => {
                return (
                    <div className='flex items-center text-2xl cursor-pointer' onClick={() => changeTrack(track)}>
                        <img className='rounded mr-4' src={track.cover} width={60} height={60} />
                        <h2>{track.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTrack