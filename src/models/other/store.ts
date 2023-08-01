// custom
import UserEntity from "../entities/user"

export interface DataOfStore {
    darkMode: boolean
    isSidebarOpen: boolean
    token: string | null
    user: UserEntity | null
}

export interface ActionsOfStore {
    setDarkMode: (darkMode: DataOfStore['darkMode']) => void
    setSidebarStatus: (isSidebarOpen: DataOfStore['isSidebarOpen']) => void
    setToken: (token: DataOfStore['token']) => void
    setUser: (user: DataOfStore['user']) => void
    onLogin: (token: DataOfStore['token'], user: DataOfStore['user']) => void
    onLogout: () => void
}

type Store = DataOfStore & ActionsOfStore

export default Store