// module
import { create } from "zustand";
import { persist } from "zustand/middleware";
// custom
import Store from "../models/other/store";

const persistedStoreName = 'app-golbal-store'

const useStore = create<Store, any>(
    persist((set, _) =>
    ({
        darkMode: false,
        isSidebarOpen: true,
        token: null,
        user: null,
        setDarkMode: (darkMode: Store['darkMode']) => {
            set({ darkMode });
        },
        setSidebarStatus: (isSidebarOpen: Store['isSidebarOpen']) => {
            set({ isSidebarOpen });
        },
        setToken: (token: Store['token']) => {
            set({ token });
        },
        setUser: (user: Store['user']) => {
            set({ user });
        },
        onLogin: (token: Store['token'], user: Store['user']) => {
            set({ token, user })
        },
        onLogout: () => {
            set({ token: null, user: null })
        },
    }),
        {
            name: persistedStoreName,
            getStorage: () => localStorage,
        }
    )
);

export default useStore;