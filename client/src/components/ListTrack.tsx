import React from 'react'
import ITrack from '../interface/ITrack'

interface ListTrake {
    tracks: ITrack[],
    changeTrack(track: ITrack): void
}

const ListTrack = ({ changeTrack, tracks }: ListTrake) => {
    return (
        <div className='w-full h-full gap-x-3 overflow-auto gap-y-2 p-4 flex flex-wrap px-auto text-xl text-white'>
            {tracks.map((track: ITrack) => {
                return (
                    <div className='flex flex-col items-center p-4 bg-[#1a1a1a] cursor-pointer rounded-md' onClick={() => changeTrack(track)}>
                        <img className='rounded' src={track.cover} width={250} height={250} />
                        <h2>{track.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTrack