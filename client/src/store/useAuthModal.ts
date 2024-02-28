import { create } from 'zustand'

const useAuthModal = create((set) => ({
    isOpenAuth: false,
    openModal: () => set(() => ({ isOpenAuth: true })),
    closeModal: () => set(() => ({ isOpenAuth: false })),
}))

export default useAuthModal;