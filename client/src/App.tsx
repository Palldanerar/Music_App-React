import { useEffect, useState } from "react"
import Main from "./components/Main"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import useSongStore from "./store/activeSong.ts"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import PlaylistPage from "./components/PlaylistPage.tsx"
import Profile from "./components/Profile.tsx"
import AuthModal from "./components/AuthModal.tsx"
import useAuthModal from "./store/useAuthModal.ts"
import useRegisterhModal from "./store/useRegisterModal.ts"
import RegisterModal from "./components/RegisterModal.tsx"
import Studio from "./components/Studio.tsx"
import usePlaylistModal from "./store/usePlaylistModal.ts"
import PlaylistModal from "./components/PlaylistModal.tsx"

function App() {

  const { isOpenAuth } = useAuthModal();
  const { isOpenRegister } = useRegisterhModal()
  const { isOpenPlaylist } = usePlaylistModal()
  const [songs, setSongs] = useState([])
  const [playlists, setPlaylists] = useState([])

  const { activeSong } = useSongStore()

  const getAllSongs = async () => {
    const responce = await axios.get("http://localhost:4800/songs")
    setSongs(responce.data.songs)
    console.log(songs)
  }

  const getAllPlaylists = async () => {
    const responce = await axios.get("http://localhost:4800/playlists")
    setPlaylists(responce.data)
    console.log(playlists)
  }

  useEffect(() => {
    getAllSongs()
    getAllPlaylists()
  }, [])

  return (
    <div className="w-full h-screen">
      {isOpenAuth && <AuthModal />}
      {isOpenRegister && <RegisterModal />}
      {isOpenPlaylist && <PlaylistModal />}
      <div className="app_screen w-full flex">
        <div className="w-1/5 h-full">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full">
          <Routes>
            <Route path="/" element={<Main playlists={playlists} songs={songs} />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </div>
      </div>
      <div className="w-full h-[90px] bg-red-600">
        <Player activeSong={activeSong} />
      </div>
    </div>
  )
}

export default App
