import React from 'react'
import ITrack from '../interface/ITrack'

interface ListTrake {
    tracks: ITrack[],
    changeTrack(track: ITrack): void
}

const ListTrack = ({ changeTrack, tracks }: ListTrake) => {
    return (
        <div className='w-full h-full gap-x-3 overflow-auto gap-y-2 p-4 flex flex-wrap bg-red-800'>
            {tracks.map((track: ITrack) => {
                return (
                    <div className='flex flex-col items-center p-4 cursor-pointer' onClick={() => changeTrack(track)}>
                        <img className='rounded' src={track.cover} width={200} height={200} />
                        <h2>{track.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTrack