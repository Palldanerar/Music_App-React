import { useState } from "react"
import ListTrack from "./components/ListTrack"
import TrackBlock from "./components/TrackBlock"
import { tracksList } from "../tracks.ts"

function App() {

  const [tracks, setTracks] = useState(tracksList)
  const [activeTrack, setActiveTrack] = useState()

  const changeTrack = (track) => {
    setActiveTrack(track)
  }

  return (
    <div className="w-full h-screen bg-slate-600 flex">
      <div className="w-1/3">
        <ListTrack changeTrack={changeTrack} tracks={tracks} />
      </div>
      <div className="w-2/3">
        {activeTrack ? <TrackBlock track={activeTrack} /> : <h2>Выберете трек</h2>}
      </div>
    </div>
  )
}

export default App
