import { create } from 'zustand'

const useRegisterhModal = create((set) => ({
    isOpenRegister: false,
    openModal: () => set(() => ({ isOpenRegister: true })),
    closeModal: () => set(() => ({ isOpenRegister: false })),
}))

export default useRegisterhModal;