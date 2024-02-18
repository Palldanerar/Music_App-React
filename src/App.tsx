import { useState } from "react"
import ListTrack from "./components/ListTrack"
import TrackBlock from "./components/TrackBlock"
import { tracksList } from "../tracks.ts"
import ITrack from "./interface/ITrack.ts"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

function App() {

  const [tracks, setTracks] = useState<ITrack[]>(tracksList)
  const [activeTrack, setActiveTrack] = useState<ITrack>()

  const changeTrack = (track: ITrack) => {
    setActiveTrack(track)
  }

  return (
    <div className="w-full h-screen bg-slate-600">
      <Header />
      <div className="w-full flex music_block">
        <div className="w-1/3">
          <ListTrack changeTrack={changeTrack} tracks={tracks} />
        </div>
        <div className="w-2/3">
          {activeTrack ? <TrackBlock track={activeTrack} /> : <h2>Выберете трек</h2>}
        </div>
      </div>
    </div>
  )
}

export default App
