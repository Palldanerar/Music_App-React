import React, { useState } from 'react'
import ITrack from '../interface/ITrack'
import ListTrack from './ListTrack'

interface SearchProps {
  tracks: ITrack[],
  changeTrack(): void 
}

const Search = ({ tracks, changeTrack }: SearchProps) => {

  const [search, setSearch] = useState("")
  const [historyTracks, setHistoryTracks] = useState([])

  const searchTrack = () => {
    if (search) {
      return tracks.filter((track: ITrack) => track.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    return []
  }



  return (
    <div className='w-full h-full overflow-auto bg-yellow-700'>
      <div>
        <input type="text" value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder='Поиск треков' />
      </div>
      <div>
        <h2>История поисков</h2>
        <ListTrack tracks={searchTrack()} changeTrack={changeTrack} />
      </div>
    </div>
  )
}

export default Search