import { User } from "../types/types.ts";
import { create } from "zustand";
import {USER_LOCALSTORAGE_KEY} from "../utils/common.ts";
import {devtools} from "zustand/middleware";

type State = {
    user?: User
}

type Actions = {
    setUser: (user: User) => void
    logout: () => void
    initUser: () => void
}

export const useUserStore = create<State & Actions>()(devtools((set) => ({
    username: undefined,
    setUser: (user) => {
        set({ user })
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
    },
    logout: () => {
        set({ user: undefined })
        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
    initUser: () => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

        if (user) {
            set({ user: JSON.parse(user) })
        }
    }
})))
