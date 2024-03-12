import { create } from 'zustand'

const usePlaylistModal = create((set) => ({
    isOpenPlaylist: false,
    openModalPlaylist: () => set(() => ({ isOpenPlaylist: true })),
    closeModalPlaylist: () => set(() => ({ isOpenPlaylist: false })),
}))

export default usePlaylistModal;