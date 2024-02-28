import { create } from 'zustand'

const useUser = create((set) => ({
    user: false,
}))

export default useUser;