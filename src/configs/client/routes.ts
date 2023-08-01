// custom
import RouteModel from '../../models/other/route'
import PATH from '../../enums/route'
import ProtectedLayout from '../../layouts/protected-layout'
import PublicLayout from '../../layouts/public-layout'
import Home from '../../pages/home'
import Login from '../../pages/login'
import NotFound from '../../pages/not-found'

const routes: Array<RouteModel> = [
    {
        title: 'login',
        path: PATH.login,
        isPublic: true,
        Layout: PublicLayout,
        Cmp: Login
    },
    {
        title: 'not-found',
        path: PATH.notFound,
        isPublic: false,
        Layout: ProtectedLayout,
        Cmp: NotFound
    },
    {
        title: 'home',
        path: PATH.home,
        isPublic: false,
        Layout: ProtectedLayout,
        Cmp: Home
    },
]

export default routes