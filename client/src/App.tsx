import { useEffect, useState } from "react"
import Main from "./components/Main"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import useSongStore from "./store/activeSong.ts"
import axios from "axios"

function App() {

  const [songs, setSongs] = useState([])

  const { activeSong } = useSongStore()

  const getAllSongs = async () => {
    const responce = await axios.get("http://localhost:4800/songs")
    setSongs(responce.data.songs)
    console.log(songs)
  }

  useEffect(() => {
    getAllSongs()
  }, [])

  return (
    <div className="w-full h-screen">
      <div className="app_screen w-full flex">
        <div className="w-1/5 h-full">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full">
          <Main songs={songs} />          
        </div>
      </div>
      <div className="w-full h-[80px] bg-red-600">
        <Player activeSong={activeSong} />
      </div>
    </div>
  )
}

export default App
