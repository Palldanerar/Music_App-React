import { useState } from "react"
import ListTrack from "./components/ListTrack"
import TrackBlock from "./components/TrackBlock"
import { tracksList } from "../tracks.ts"
import ITrack from "./interface/ITrack.ts"
import Header from "./components/Header.tsx"
import Sidebar from "./components/Sidebar.tsx"
import Player from "./components/Player.tsx"
import { Route, Routes } from "react-router-dom"
import Search from "./components/Search.tsx"
import Library from "./components/Library.tsx"
import PlayerBlock from "./components/PlayerBlock.tsx"
import MusicText from "./components/MusicText.tsx"

function App() {

  const [tracks, setTracks] = useState<ITrack[]>(tracksList)
  const [activeTrack, setActiveTrack] = useState<ITrack>()
  const [activeBlock, setActiveBlock] = useState("Main")

  const changeTrack = (track: ITrack) => {
    setActiveTrack(track)
  }

  return (
    <div className="w-full h-screen bg-slate-600">
      <Header />
      <div className="w-full flex music_block">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <Routes>
            <Route path="/" element={<ListTrack tracks={tracks} changeTrack={changeTrack} />} />
            <Route path="/search" element={<Search tracks={tracks} changeTrack={changeTrack} />} />
            <Route path="/library" element={<Library />} />
            <Route path="/track" element={<TrackBlock track={activeTrack} />} />
          </Routes>
        </div>
      </div>
      <Player track={activeTrack} />
    </div>
  )
}

export default App
