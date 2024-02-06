import {create} from "zustand";
import {$api} from "../config/api/api.ts";
import {User} from "../types/types.ts";
import {useUserStore} from "./userStore.ts";

type State = {
    username: string
    password: string
    isLoading: boolean
    error: null | string | unknown
}

type Actions = {
    setUsername: (val: string) => void
    setPassword: (val: string) => void
    authorization: () => void
}

export const useLoginFormStore = create<State & Actions>((set, get) => ({
    username: '',
    password: '',
    isLoading: false,
    error: null,
    setUsername: (val) => set(() => ({
        username: val
    })),
    setPassword: (val) => set(() => ({
        password: val
    })),
    authorization: async () => {
        try {
            set({ isLoading: true, error: null })
            const response = await $api.post<User>('/login', {
                username: get().username,
                password: get().password,
            })

            if (!response.data) throw new Error('no data')

            useUserStore.getState().setUser(response.data)
            set({ isLoading: false, password: '', username: '' })
        } catch (e) {
            set({ isLoading: false, error: e })
        }
    },
}))
