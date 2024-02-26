import { create } from 'zustand'

const useSongStore = create((set) => ({
    activeSong: {},
}))

export default useSongStore;
