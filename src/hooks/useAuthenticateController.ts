// module
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
// custom
import useIsAuthenticated from "./useIsAuthenticated"
import isPublicRoute from "../util/isPublicRoute"
import PATH from "../enums/route"

const useAuthenticateController = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isAuthenticated: boolean = useIsAuthenticated()
    const isCurrentPathPublic: boolean = isPublicRoute(pathname)

    useEffect(() => {
        if (isAuthenticated && isCurrentPathPublic) {
            navigate(PATH.home)
        }

        if (!isAuthenticated && !isCurrentPathPublic) {
            navigate(PATH.login)
        }

    }, [isAuthenticated, isCurrentPathPublic])
}

export default useAuthenticateController