// custom
import PATH from "../../enums/route";
import SidebarItems from "../../models/other/sidebar";
import Login from "../../pages/login";

const sidebar: SidebarItems = [
    {
        title: 'gysgsr',
        Icon: Login,
        route: PATH.profile
    },
    {
        title: 'gysgsr',
        Icon: Login,
        children: [
            {
                title: 'sewfwef',
                Icon: Login,
                route: PATH.notFound
            },
            {
                title: 'sewfwef',
                Icon: Login,
                route: PATH.notFound
            }
        ]
    }
]

export default sidebar