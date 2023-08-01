// module
import Axios, { AxiosInstance } from 'axios'
// custom
import Store from '../models/other/store'
import useStore from '../state-managment/store'

const useBaseService = (): AxiosInstance => {
    const token: Store['token'] = useStore((store: Store) => store.token)

    const axiosInstance: AxiosInstance = Axios.create()

    axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL
    axiosInstance.defaults.headers['Content-Type'] = 'application/json'
    if (token !== null) {
        axiosInstance.defaults.headers['authorization'] = `Bearer ${token}`
    } else {
        if ('authorization' in axiosInstance.defaults.headers) {
            delete axiosInstance.defaults.headers['authorization']
        }
    }

    axiosInstance.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            return Promise.reject(error)
        }
    )

    return axiosInstance
}

export default useBaseService