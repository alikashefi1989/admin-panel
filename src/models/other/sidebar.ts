// module
import { FC } from "react"
// custom
import PATH from "../../enums/route"

export interface SidebarItem {
    title: string
    Icon: FC
    route?: PATH
    children?: Array<Omit<SidebarItem, 'children' | 'route'> & { route: PATH }>
}

type SidebarItems = Array<SidebarItem>

export default SidebarItems