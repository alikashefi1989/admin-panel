// module
import { FC } from "react"
// custom
import Sidebar from "./sidebar"
import Content from "./content"

interface ProtectedLayoutProps {
    Cmp: FC
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ Cmp }) => {
    return (
        <div className="protected-layout-wrapper">
            <Sidebar />
            <Content>
                <Cmp />
            </Content>
        </div>
    )
}

export default ProtectedLayout