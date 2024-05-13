import { create } from 'zustand'

interface BearState {
    blackBears: number
    pandaBears: number
    polarBears: number

    increaseBlackBears: (by: number) => void
    increasePolarBears: (by: number) => void
}


export const useBearStore = create<BearState>()((set) => ({
    blackBears: 10,
    pandaBears: 0,
    polarBears: 0,

    increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by }))
}))